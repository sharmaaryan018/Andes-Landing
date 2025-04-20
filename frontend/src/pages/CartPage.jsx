import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../components/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import AddressForm from '../AddressForm';
import { doc, getDoc, updateDoc, collection, addDoc, Timestamp, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart
  } = useCart();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [showMobilePrompt, setShowMobilePrompt] = useState(false);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paperBag, setPaperBag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
    if (userData?.uid) {
      fetchMobile(userData.uid);
      fetchUserAddress(userData.uid);
    }
  }, []);

  const fetchUserAddress = async (uid) => {
    try {
      const q = query(collection(db, 'addresses'), where('userId', '==', uid));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const addressData = querySnapshot.docs[0].data();
        const formattedAddress = `${addressData.address}, ${addressData.landmark}, ${addressData.pincode} (${addressData.addressType})`;
        setAddress(formattedAddress);
      } else {
        setAddress(null);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress(null);
    }
  };

  const fetchMobile = async (uid) => {
    try {
      const userSnap = await getDoc(doc(db, 'users', uid));
      if (userSnap.exists()) {
        setMobileNumber(userSnap.data().mobile || '');
      }
    } catch (error) {
      console.error('Error fetching mobile:', error);
    }
  };

  // Calculate total amount and check minimum order requirement
  const paperBagFee = paperBag ? 4 : 0;
  const totalAmount = cartTotal + 30 + 8 + paperBagFee; // Delivery ₹30 + Convenience ₹8
  const meetsMinimum = totalAmount >= 50;

  const handleCheckout = async () => {
    setIsLoading(true);
    
    // Check minimum order amount first
    if (!meetsMinimum) {
      toast.error(`Minimum order amount is ₹50 (current: ₹${totalAmount})`);
      setIsLoading(false);
      return;
    }

    if (!user) {
      alert('Please login to proceed.');
      setIsLoading(false);
      navigate('/'); // Redirect to login

      return;
    }

    if(!address) {
      alert('Please add a delivery address to proceed.');
      setShowAddressForm(true);
      setIsLoading(false);
      return;
    }

    if (!mobileNumber) {
      alert('Mobile number is required');
      setShowMobilePrompt(true);
      setIsLoading(false);
      return;
    }

    if (!address) {
      alert('Delivery address is required');
      setShowAddressForm(true);
      setIsLoading(false);
      return;
    }

    try {
      const orderNumber = await createOrder();
      clearCart();
      navigate(`/order-confirmation/${orderNumber}`);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const createOrder = async () => {
    const services = cartItems.reduce((acc, item) => {
      acc[item.displayName] = item.quantity;
      return acc;
    }, {});

    const timestamp = Date.now();
    const orderNumber = `ORD-${timestamp}`;
    const paperBagFee = paperBag ? 4 : 0;

    const orderData = {
      userId: user.uid,
      userName: user.name || 'Anonymous',
      userMobile: mobileNumber,
      address: address,
      services: services,
      subtotal: cartTotal,
      deliveryFee: 30,
      convenienceFee: 8,
      paperBag: paperBag,
      totalItems: cartCount,
      paperBagFee: paperBagFee,
      pickupTime: "6:00 PM - 10:00 PM",
      ultraFastDelivery: false,
      totalCost: cartTotal + 30 + 8 + paperBagFee,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      orderTimestamp: timestamp,
      orderNumber: orderNumber,
    };

    await addDoc(collection(db, 'cartdetails'), orderData);
    return orderNumber;
  };

  const handleSaveMobile = async () => {
    if (mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    if (true) {
      setShowMobilePrompt(false);
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-20">
      <Helmet>
        <title>Andes Laundry - Your Cart</title>
        <meta name="description" content="Review your laundry cart and proceed to checkout" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Laundry Cart</h1>

        {cartCount === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Your cart is empty</h2>
            <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {cartCount} {cartCount === 1 ? 'Item' : 'Items'} in Cart
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <img
                          src={item.image}
                          alt={item.displayName}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-gray-800">{item.displayName}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>

                        <p className="text-gray-600 mt-1">{item.description}</p>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-gray-400 line-through mr-2">
                              ₹{(item.unit === 'piece' || item.unit === 'pair' ? item.rateByPiece : item.rateByKg) * item.quantity}
                            </span>
                            <span className="text-lg font-semibold text-blue-600">
                              ₹{(item.unit === 'piece' || item.unit === 'pair' ? item.discountedRateByPiece : item.discountedRateByKg) * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>

                <div className="space-y-4">
                  {!meetsMinimum && (
                    <div className="text-sm text-red-500 bg-red-50 p-2 rounded">
                      Minimum order amount is ₹50 (current: ₹{totalAmount})
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{cartTotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium">₹30</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Convenience Fee</span>
                    <span className="font-medium">₹8</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="paperBag"
                        checked={paperBag}
                        onChange={(e) => setPaperBag(e.target.checked)}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <label htmlFor="paperBag" className="ml-2 text-sm text-gray-600">
                        Paper Bag (+₹4)
                      </label>
                    </div>
                    <span className="font-medium">{paperBag ? '₹4' : '₹0'}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold text-blue-600">
                      ₹{totalAmount}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={() => setShowAddressForm(true)}
                    className="text-sm text-blue-600 underline mb-2"
                  >
                    {address ? 'Edit Address' : 'Add Address'}
                  </button>

                  {address && (
                    <div className="text-sm text-gray-600 border p-2 rounded mb-2">
                      <p className="font-semibold">Delivery Address:</p>
                      <p>{address}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">
                      <strong>Mobile:</strong> {mobileNumber || 'Not provided'}
                    </p>
                    <button
                      onClick={() => setShowMobilePrompt(true)}
                      className="text-sm text-blue-600 underline"
                    >
                      {mobileNumber ? 'Edit' : 'Add'}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isLoading || !meetsMinimum}
                  className={`mt-6 w-full py-3 rounded-lg transition duration-200 ${
                    isLoading || !meetsMinimum
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isLoading
                    ? 'Processing...'
                    : !meetsMinimum
                      ? `Add ₹${50 - totalAmount} more`
                      : 'Proceed to Checkout'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Address Form Modal */}
      {showAddressForm && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50"> {/* Added pt-16 for top padding */}
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative mt-20"> {/* Added mt-8 */}
      <button 
        onClick={() => setShowAddressForm(false)}
        className="absolute top-2 right-2 text-xl text-gray-700"
      >
        ×
      </button>
      <AddressForm 
        onClose={() => {
          setShowAddressForm(false);
          if (user?.uid) fetchUserAddress(user.uid);
        }} 
        userId={user?.uid}
      />
    </div>
  </div>
)}

      {/* Mobile Number Modal */}
      {showMobilePrompt && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50"> {/* Added pt-16 */}
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative mt-20"> {/* Added mt-8 */}
      <button 
        onClick={() => setShowMobilePrompt(false)}
        className="absolute top-2 right-2 text-xl text-gray-700"
      >
        ×
      </button>
      <h3 className="text-lg font-semibold mb-4">Enter Mobile Number</h3>
      <input
        type="tel"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="10-digit mobile number"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        maxLength="10"
      />
      <button
        onClick={handleSaveMobile}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save Mobile Number
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default CartPage;