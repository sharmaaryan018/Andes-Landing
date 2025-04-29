// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useCart } from '../components/CartContext';
// import { Link, useNavigate } from 'react-router-dom';
// import AddressForm from '../AddressForm';
// import { doc, getDoc, updateDoc, collection, addDoc, Timestamp, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
// import { db } from '../firebase';
// import { toast } from 'react-toastify';

// const CartPage = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     updateQuantity,
//     cartTotal,
//     cartCount,
//     clearCart
//   } = useCart();

//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [showMobilePrompt, setShowMobilePrompt] = useState(false);
//   const [user, setUser] = useState(null);
//   const [address, setAddress] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [paperBag, setPaperBag] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     setUser(userData);
//     if (userData?.uid) {
//       fetchMobile(userData.uid);
//       fetchUserAddress(userData.uid);
//     }
//   }, []);

//   const fetchUserAddress = async (uid) => {
//     try {
//       const q = query(collection(db, 'addresses'), where('userId', '==', uid));
//       const querySnapshot = await getDocs(q);
      
//       if (!querySnapshot.empty) {
//         const addressData = querySnapshot.docs[0].data();
//         const formattedAddress = `${addressData.address}, ${addressData.landmark}, ${addressData.pincode} (${addressData.addressType})`;
//         setAddress(formattedAddress);
//       } else {
//         setAddress(null);
//       }
//     } catch (error) {
//       console.error('Error fetching address:', error);
//       setAddress(null);
//     }
//   };

//   const fetchMobile = async (uid) => {
//     try {
//       const userSnap = await getDoc(doc(db, 'users', uid));
//       if (userSnap.exists()) {
//         setMobileNumber(userSnap.data().mobile || '');
//       }
//     } catch (error) {
//       console.error('Error fetching mobile:', error);
//     }
//   };

//   // Calculate total amount and check minimum order requirement
//   const paperBagFee = paperBag ? 4 : 0;
//   const totalAmount = cartTotal + 30 + 8 + paperBagFee; // Delivery ₹30 + Convenience ₹8
//   const meetsMinimum = totalAmount >= 50;

//   const handleCheckout = async () => {
//     setIsLoading(true);
    
//     // Check minimum order amount first
//     if (!meetsMinimum) {
//       toast.error(`Minimum order amount is ₹50 (current: ₹${totalAmount})`);
//       setIsLoading(false);
//       return;
//     }

//     if (!user) {
//       alert('Please login to proceed.');
//       setIsLoading(false);
//       navigate('/'); // Redirect to login

//       return;
//     }

//     if(!address) {
//       alert('Please add a delivery address to proceed.');
//       setShowAddressForm(true);
//       setIsLoading(false);
//       return;
//     }

//     if (!mobileNumber) {
//       alert('Mobile number is required');
//       setShowMobilePrompt(true);
//       setIsLoading(false);
//       return;
//     }

//     if (!address) {
//       alert('Delivery address is required');
//       setShowAddressForm(true);
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const orderNumber = await createOrder();
//       clearCart();
//       navigate(`/order-confirmation/${orderNumber}`);
//     } catch (error) {
//       console.error('Checkout error:', error);
//       alert('Failed to place order. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const createOrder = async () => {
//     const services = cartItems.reduce((acc, item) => {
//       acc[item.displayName] = item.quantity;
//       return acc;
//     }, {});

//     const timestamp = Date.now();
//     const orderNumber = `ORD-${timestamp}`;
//     const paperBagFee = paperBag ? 4 : 0;

//     const orderData = {
//       userId: user.uid,
//       userName: user.name || 'Anonymous',
//       userMobile: mobileNumber,
//       address: address,
//       services: services,
//       subtotal: cartTotal,
//       deliveryFee: 30,
//       convenienceFee: 8,
//       paperBag: paperBag,
//       totalItems: cartCount,
//       paperBagFee: paperBagFee,
//       pickupTime: "6:00 PM - 10:00 PM",
//       ultraFastDelivery: false,
//       totalCost: cartTotal + 30 + 8 + paperBagFee,
//       status: 'pending',
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp(),
//       orderTimestamp: timestamp,
//       orderNumber: orderNumber,
//     };

//     await addDoc(collection(db, 'cartdetails'), orderData);
//     return orderNumber;
//   };

//   const handleSaveMobile = async () => {
//     if (mobileNumber.length !== 10) {
//       alert('Please enter a valid 10-digit mobile number');
//       return;
//     }

//     if (true) {
//       setShowMobilePrompt(false);
//     } else {
//       alert('Please enter a valid mobile number');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 mt-20">
//       <Helmet>
//         <title>Andes Laundry - Your Cart</title>
//         <meta name="description" content="Review your laundry cart and proceed to checkout" />
//       </Helmet>

//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Laundry Cart</h1>

//         {cartCount === 0 ? (
//           <div className="bg-white rounded-xl shadow-md p-8 text-center">
//             <h2 className="text-xl font-medium text-gray-700 mb-4">Your cart is empty</h2>
//             <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
//               Browse Services
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Cart Items */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                 <div className="p-6 border-b border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {cartCount} {cartCount === 1 ? 'Item' : 'Items'} in Cart
//                   </h2>
//                   {cartCount > 0 && (
//                     <button 
//                       onClick={clearCart}
//                       className="text-red-500 hover:text-red-700 text-sm font-medium"
//                     >
//                       Remove All Items
//                     </button>
//                   )}
//                 </div>

//                 <div className="divide-y divide-gray-200">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="p-6 flex flex-col sm:flex-row">
//                       <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
//                         <img
//                           src={item.image}
//                           alt={item.displayName}
//                           className="w-32 h-32 object-cover rounded-lg"
//                         />
//                       </div>

//                       <div className="flex-grow">
//                         <div className="flex justify-between">
//                           <h3 className="text-lg font-medium text-gray-800">{item.displayName}</h3>
//                           <button 
//                             onClick={() => removeFromCart(item.id)} 
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             Remove
//                           </button>
//                         </div>

//                         <p className="text-gray-600 mt-1">{item.description}</p>

//                         <div className="mt-4 flex items-center justify-between">
//                           <div className="flex items-center">
//                             <button
//                               onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                               className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
//                             >
//                               -
//                             </button>
//                             <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300 bg-white">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                               className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
//                             >
//                               +
//                             </button>
//                           </div>

//                           <div className="text-right">
//                             <span className="text-gray-400 line-through mr-2">
//                               ₹{(item.unit === 'piece' || item.unit === 'pair' ? item.rateByPiece : item.rateByKg) * item.quantity}
//                             </span>
//                             <span className="text-lg font-semibold text-blue-600">
//                               ₹{(item.unit === 'piece' || item.unit === 'pair' ? item.discountedRateByPiece : item.discountedRateByKg) * item.quantity}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div>
//               <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>

//                 <div className="space-y-4">
//                   {!meetsMinimum && (
//                     <div className="text-sm text-red-500 bg-red-50 p-2 rounded">
//                       Minimum order amount is ₹50 (current: ₹{totalAmount})
//                     </div>
//                   )}
                  
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium">₹{cartTotal}</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Delivery</span>
//                     <span className="font-medium">₹30</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Convenience Fee</span>
//                     <span className="font-medium">₹8</span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="paperBag"
//                         checked={paperBag}
//                         onChange={(e) => setPaperBag(e.target.checked)}
//                         className="h-4 w-4 text-blue-600 rounded"
//                       />
//                       <label htmlFor="paperBag" className="ml-2 text-sm text-gray-600">
//                         Paper Bag (+₹4)
//                       </label>
//                     </div>
//                     <span className="font-medium">{paperBag ? '₹4' : '₹0'}</span>
//                   </div>

//                   <div className="border-t border-gray-200 pt-4 flex justify-between">
//                     <span className="text-lg font-semibold">Total</span>
//                     <span className="text-lg font-semibold text-blue-600">
//                       ₹{totalAmount}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <button 
//                     onClick={() => setShowAddressForm(true)}
//                     className="text-sm text-blue-600 underline mb-2"
//                   >
//                     {address ? 'Edit Address' : 'Add Address'}
//                   </button>

//                   {address && (
//                     <div className="text-sm text-gray-600 border p-2 rounded mb-2">
//                       <p className="font-semibold">Delivery Address:</p>
//                       <p>{address}</p>
//                     </div>
//                   )}

//                   <div className="flex items-center justify-between mb-2">
//                     <p className="text-sm text-gray-600">
//                       <strong>Mobile:</strong> {mobileNumber || 'Not provided'}
//                     </p>
//                     <button
//                       onClick={() => setShowMobilePrompt(true)}
//                       className="text-sm text-blue-600 underline"
//                     >
//                       {mobileNumber ? 'Edit' : 'Add'}
//                     </button>
//                   </div>
//                 </div>
//                 {cartCount > 0 && (
//                     <button 
//                       onClick={clearCart}
//                       className="text-red-500 hover:text-red-700 text-sm font-medium"
//                     >
//                       Remove All Items
//                     </button>
//                   )}

//                 <button
//                   onClick={handleCheckout}
//                   disabled={isLoading || !meetsMinimum}
//                   className={`mt-6 w-full py-3 rounded-lg transition duration-200 ${
//                     isLoading || !meetsMinimum
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'bg-blue-600 hover:bg-blue-700 text-white'
//                   }`}
//                 >
//                   {isLoading
//                     ? 'Processing...'
//                     : !meetsMinimum
//                       ? `Add ₹${50 - totalAmount} more`
//                       : 'Proceed to Checkout'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Address Form Modal */}
//       {showAddressForm && (
//   <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50"> {/* Added pt-16 for top padding */}
//     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative mt-20"> {/* Added mt-8 */}
//       <button 
//         onClick={() => setShowAddressForm(false)}
//         className="absolute top-2 right-2 text-xl text-gray-700"
//       >
//         ×
//       </button>
//       <AddressForm 
//         onClose={() => {
//           setShowAddressForm(false);
//           if (user?.uid) fetchUserAddress(user.uid);
//         }} 
//         userId={user?.uid}
//       />
//     </div>
//   </div>
// )}

//       {/* Mobile Number Modal */}
//       {showMobilePrompt && (
//   <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50"> {/* Added pt-16 */}
//     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative mt-20"> {/* Added mt-8 */}
//       <button 
//         onClick={() => setShowMobilePrompt(false)}
//         className="absolute top-2 right-2 text-xl text-gray-700"
//       >
//         ×
//       </button>
//       <h3 className="text-lg font-semibold mb-4">Enter Mobile Number</h3>
//       <input
//         type="tel"
//         value={mobileNumber}
//         onChange={(e) => setMobileNumber(e.target.value)}
//         placeholder="10-digit mobile number"
//         className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
//         maxLength="10"
//       />
//       <button
//         onClick={handleSaveMobile}
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//       >
//         Save Mobile Number
//       </button>
//     </div>
//   </div>
// )}
//     </div>
//   );
// };

// export default CartPage;


import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../components/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import AddressForm from '../AddressForm';
import { doc, getDoc, updateDoc, collection, addDoc, Timestamp, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';


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
  const [showCoupons, setShowCoupons] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  // Available coupons
  const availableCoupons = [
    {
      code: 'FREE_DEL',
      description: 'Save ₹30 on orders above ₹50',
      discount: 30,
      minOrder: 50,
      type: 'delivery',
      autoApply: false
    },
    {
      code: 'Free Cadbury Chocolate',
      description: 'Free Cadbury Chocolate on orders above ₹300',
      discount: 0,
      minOrder: 300,
      type: 'gift',
      autoApply: true
    },
    {
      code: 'ANDES_NOW',
      description: 'Get ₹100 off on orders above ₹800',
      discount: 100,
      minOrder: 800,
      type: 'fixed',
      autoApply: false
    },
    {
      code: 'MEGH_SHAH',
      description: '20% off (up to ₹200) + FREE delivery on orders above ₹800',
      discount: 0.2, // 20%
      maxDiscount: 200,
      minOrder: 800,
      type: 'percentage',
      autoApply: false
    }
  ];

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
    if (userData?.uid) {
      fetchMobile(userData.uid);
      fetchUserAddress(userData.uid);
    }
    
    // Check for auto-apply coupons

    // Check if current applied coupon is still valid
    if (appliedCoupon && cartTotal < appliedCoupon.minOrder) {
      setAppliedCoupon(null);
      toast(`Coupon ${appliedCoupon.code} removed as order value dropped below ₹${appliedCoupon.minOrder}`);
    }
    checkAutoApplyCoupons();
  }, [cartTotal]);

  const checkAutoApplyCoupons = () => {
    const autoCoupon = availableCoupons.find(c => c.autoApply && cartTotal >= c.minOrder);
    if (autoCoupon && !appliedCoupon) {
      setAppliedCoupon(autoCoupon);
      toast.success(`Coupon applied: ${autoCoupon.description}`);
    }
  };

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
  const roundToTwo = (num) => Math.round(num * 100) / 100;


  const applyCoupon = (code) => {
    // Check if manually entering code
    console.log('Coupon code:', code);  
    if (code && typeof code === 'string') {
      const couponToApply = availableCoupons.find(c => c.code.toLowerCase() === code.toLowerCase());
      if (!couponToApply) {
        toast.error('Invalid coupon code');
        return;
      }
      code = couponToApply;
    }
    
    // Validate coupon
    if (cartTotal < code.minOrder) {
      toast.error(`Minimum order amount for this coupon is ₹${code.minOrder}`);
      return;
    }
    
    // Check if already applied
    if (appliedCoupon && appliedCoupon.code === code.code) {
      toast('This coupon is already applied');
      return;
    }
    
    // Remove any previously applied coupon
    if (appliedCoupon) {
      toast(`Replaced ${appliedCoupon.code} with ${code.code}`);
    }
    
    setAppliedCoupon(code);
    setCouponCode('');
    setShowCoupons(false);
    toast.success(`Coupon applied: ${code.description}`);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    toast('Coupon removed');
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    
    const { type, discount, maxDiscount } = appliedCoupon;
    
    if (type === 'fixed') {
      return discount;
    } else if (type === 'percentage') {
      const calculatedDiscount = cartTotal * discount;
      const finalDiscount = maxDiscount ? Math.min(calculatedDiscount, maxDiscount) : calculatedDiscount;
      return roundToTwo(finalDiscount);    } else if (type === 'delivery') {
      return 0; // Delivery discount is handled separately
    }
    return 0;
  };

  const calculateDeliveryFee = () => {
    if (appliedCoupon?.type === 'delivery' || appliedCoupon?.code === 'MEGH_SHAH') {
      return 0;
    }
    return 30;
  };

  // Calculate total amount and check minimum order requirement
  const paperBagFee = paperBag ? 4 : 0;
  const deliveryFee = calculateDeliveryFee();
  const discountAmount = calculateDiscount();
  const subtotalAfterDiscount = Math.max(0, cartTotal - discountAmount);
  const totalAmount = subtotalAfterDiscount + deliveryFee + 8 + paperBagFee;
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

    try {
      const orderNumber = await createOrder();
      clearCart();
      toast.success('Order placed successfully!');  
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
    const deliveryFee = calculateDeliveryFee();
    const discountAmount = calculateDiscount();

    const orderData = {
      userId: user.uid,
      userName: user.name || 'Anonymous',
      userMobile: mobileNumber,
      address: address,
      services: services,
      subtotal: cartTotal,
      deliveryFee: deliveryFee,
      convenienceFee: 8,
      paperBag: paperBag,
      totalItems: cartCount,
      paperBagFee: paperBagFee,
      pickupTime: "6:00 PM - 10:00 PM",
      ultraFastDelivery: false,
      discountAmount: discountAmount,
      appliedCoupon: appliedCoupon?.code || null,
      totalCost: cartTotal + deliveryFee + 8 + paperBagFee - discountAmount,
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

    try {
      await updateDoc(doc(db, 'users', user.uid), {
        mobile: mobileNumber
      });
      setShowMobilePrompt(false);
      toast.success('Mobile number saved');
    } catch (error) {
      console.error('Error saving mobile:', error);
      alert('Failed to save mobile number');
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
                  {cartCount > 0 && (
                    <button 
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove All Items
                    </button>
                  )}
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

                  {appliedCoupon && (
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-600">Coupon Applied</span>
                        <span className="block text-xs text-green-600">{appliedCoupon.description}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-green-600 mr-2">-₹{calculateDiscount()}</span>
                        <button 
                          onClick={removeCoupon}
                          className="text-xs text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium">
                      {appliedCoupon?.type === 'delivery' ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
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

                        {/* Coupon Section */}
                        {/* Modern Coupon Section */}
        <div className="mt-6 space-y-3">
          {!appliedCoupon ? (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-800">Have a coupon code?</h3>
                <button 
                  onClick={() => setShowCoupons(true)}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
                >
                  View All Coupons
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex shadow-sm rounded-lg overflow-hidden">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-grow px-4 py-3 text-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
                <button
                  onClick={() => applyCoupon(couponCode)}
                  disabled={!couponCode.trim()}
                  className={`px-5 py-3 text-sm font-medium text-white transition-colors ${
                    couponCode.trim() 
                      ? 'bg-indigo-600 hover:bg-indigo-700' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Apply
                </button>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 shadow-sm relative">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-green-800">Coupon Applied</span>
          </div>
          <p className="text-green-700 text-sm">{appliedCoupon.description}</p>
        </div>
        <button
          onClick={removeCoupon}
          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
          aria-label="Remove coupon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Coupon code badge */}
      <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
        {appliedCoupon.code}
      </div>
    </div>
  )}
</div>

<div className="mt-6 space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
  {/* Address Section */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <h3 className="text-sm font-medium text-gray-700">Delivery Address</h3>
      </div>
      <button 
        onClick={() => setShowAddressForm(true)}
        className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center transition-colors"
      >
        {address ? 'Edit' : 'Add'}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
    </div>
    
    {address ? (
      <div className="bg-white p-3 rounded-md border border-gray-200 shadow-sm">
        <p className="text-sm text-gray-800">{address}</p>
      </div>
    ) : (
      <p className="text-sm text-gray-500 italic">No address provided</p>
    )}
  </div>

  {/* Mobile Section */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <h3 className="text-sm font-medium text-gray-700">Mobile Number</h3>
      </div>
      <button
        onClick={() => setShowMobilePrompt(true)}
        className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center transition-colors"
      >
        {mobileNumber ? 'Edit' : 'Add'}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
    </div>
    
    <p className={`text-sm ${mobileNumber ? 'text-gray-800' : 'text-gray-500 italic'}`}>
      {mobileNumber || 'No mobile number provided'}
    </p>
  </div>

  {/* Clear Cart Button */}
  {cartCount > 0 && (
    <div className="pt-2 border-t border-gray-200">
      <button 
        onClick={clearCart}
        className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Clear Cart
      </button>
    </div>
  )}
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
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative mt-20">
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
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative mt-20">
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

      {/* Coupons Modal */}
      {showCoupons && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-16 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative mt-20 max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setShowCoupons(false)}
              className="absolute top-2 right-2 text-xl text-gray-700"
            >
              ×
            </button>
            <h3 className="text-lg font-semibold mb-4">Available Coupons</h3>
            <div className="space-y-4">
              {availableCoupons.map((coupon) => (
                <div key={coupon.code} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">{coupon.code}</h4>
                      <p className="text-sm text-gray-600">{coupon.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Min. order: ₹{coupon.minOrder}</p>
                    </div>
                    <button
                      onClick={() => applyCoupon(coupon)}
                      disabled={cartTotal < coupon.minOrder}
                      className={`px-3 py-1 rounded text-sm ${
                        cartTotal < coupon.minOrder
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {cartTotal < coupon.minOrder ? 'Not eligible' : 'Apply'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;