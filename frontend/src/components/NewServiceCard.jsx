import React, { useState, useEffect } from 'react';
import { useCart } from '../components/CartContext';
import toast from 'react-hot-toast';

const ServiceCard = ({ service }) => {
  const { 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    cartItems, 
    isInstantDeliveryMode, 
    hasAnyInstantItems 
  } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [isInstantDeliveryAvailable, setIsInstantDeliveryAvailable] = useState(true);
  
  // Check if this service is already in cart
  const cartItem = cartItems.find(item => item.id === service.id);
  const isInCart = Boolean(cartItem);
  const isInstantDelivery = service.isInstantDelivery || service.instantDelivery;

  // Check if instant delivery is available (12am to 2pm)
  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const hours = now.getHours();
      // Available from 0 (12am) to 14 (2pm)
      setIsInstantDeliveryAvailable(hours >= 0 && hours < 14);
    };
    
    checkAvailability();
    const intervalId = setInterval(checkAvailability, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, []);

  // Check for mode compatibility
  const incompatibleMode = 
    (isInstantDeliveryMode && !isInstantDelivery) || 
    (!isInstantDeliveryMode && isInstantDelivery && hasAnyInstantItems);

  // Instant delivery items are disabled when outside available hours
  // Only disable instant delivery items when they're not available
  const isDisabled = (isInstantDelivery && !isInstantDeliveryAvailable) || (incompatibleMode && !isInCart);

  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(service.id);
    } else {
      // Check mode compatibility
      if (isInstantDeliveryMode && !isInstantDelivery) {
        toast.error("Can't add regular items in Instant Delivery mode");
        return;
      }
      
      if (!isInstantDeliveryMode && isInstantDelivery && cartItems.length > 0) {
        toast.error("Please clear your cart before adding Instant Delivery items");
        return;
      }
      
      // If it's an instant delivery item and outside available hours, show error
      if (isInstantDelivery && !isInstantDeliveryAvailable) {
        toast.error("Instant delivery is only available between 12:00 AM and 2:00 PM");
        return;
      }
      
      const success = addToCart({ ...service, quantity });
      if (success) {
        setQuantity(1);
      }
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const originalPrice = service.unit === 'piece' || service.unit === 'pair' 
    ? service.rateByPiece 
    : service.rateByKg;
  const discountedPrice = service.unit === 'piece' || service.unit === 'pair' 
    ? service.discountedRateByPiece 
    : service.discountedRateByKg;
  const unitText = service.unit === 'piece' 
    ? 'per piece' 
    : service.unit === 'pair' 
      ? 'per pair' 
      : 'per kg';

  return (
    <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isInstantDelivery ? isInstantDeliveryAvailable ? 'border-2 border-amber-400' : 'border-2 border-gray-300' : ''}`}>
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
        {service.discount}% OFF
      </div>
      
      {/* Instant Badge - Only visible on regular service page */}
      {isInstantDelivery && !service.hideInstantBadge && (
        <div className={`absolute top-4 left-4 bg-gradient-to-r ${isInstantDeliveryAvailable ? 'from-amber-500 to-orange-500' : 'from-gray-500 to-gray-600'} text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center`}>
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
          Same Day
          {!isInstantDeliveryAvailable && (
            <span className="ml-1 bg-red-800 text-white text-xs px-1 rounded-sm">
              Unavailable
            </span>
          )}
        </div>
      )}
      
      {/* Service Image */}
      <div className={`h-48 overflow-hidden ${(isInstantDelivery && !isInstantDeliveryAvailable) ? 'opacity-70' : ''}`}>
        <img
          loading="lazy"
          src={service.image} 
          alt={service.displayName} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Incompatible Mode Overlay */}
      {!isInCart && incompatibleMode && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-20">
          <div className="bg-white p-4 rounded-lg max-w-xs text-center">
            {isInstantDeliveryMode ? (
              <>
                <p className="text-amber-600 font-bold mb-1">⚡ Instant Delivery Mode Active</p>
                <p className="text-sm text-gray-700">
                  Your cart is set to instant delivery. Only items marked with ⚡ can be added.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  To add regular items, please clear your cart first.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-700 font-bold mb-1">Regular Delivery Mode Active</p>
                <p className="text-sm text-gray-700">
                  Your cart contains regular items. Instant delivery items (⚡) can't be mixed with regular items.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  To add instant delivery items, please clear your cart first.
                </p>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Unavailable Instant Delivery Overlay - Only for instant delivery items */}
      {!isInCart && isInstantDelivery && !isInstantDeliveryAvailable && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-4 rounded-lg max-w-xs text-center">
            <svg className="w-10 h-10 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-700 font-bold mt-3 mb-1">Instant Delivery Unavailable</p>
            <p className="text-sm text-gray-600">
              Same-day delivery is only available between 12:00 AM and 2:00 PM.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Please check back during service hours.
            </p>
          </div>
        </div>
      )}
      
      {/* Service Details */}
      <div className={`p-6 ${(isInstantDelivery && !isInstantDeliveryAvailable) ? 'opacity-70' : ''}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {service.displayName}
          {isInstantDelivery && (
            <span className={`ml-2 inline-flex items-center text-xs font-medium ${isInstantDeliveryAvailable ? 'text-amber-600' : 'text-gray-500'}`}>
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              {isInstantDeliveryAvailable ? 'Same Day' : 'Same Day (Unavailable)'}
            </span>
          )}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        
        <div className="flex items-end justify-between">
          <div>
            <span className="text-gray-400 text-sm line-through mr-2">
              ₹{originalPrice}
            </span>
            <span className="text-rose-500 font-bold text-lg">
              ₹{discountedPrice}
            </span>
            <span className="block text-gray-500 text-xs mt-1">
              {unitText}
            </span>
            {isInstantDelivery && isInstantDeliveryAvailable && (
              <span className="block text-amber-600 text-xs mt-1 font-medium">
                Delivered by 10 PM today
              </span>
            )}
            {isInstantDelivery && !isInstantDeliveryAvailable && (
              <span className="block text-gray-500 text-xs mt-1">
                Available: 12:00 AM - 2:00 PM
              </span>
            )}
          </div>
          
          <div className="flex items-center">
            {isInCart && (
              <div className="flex items-center mr-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQuantity(service.id, cartItem.quantity - 1);
                  }}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 text-sm"
                  disabled={cartItem.quantity <= 1}
                >
                  -
                </button>
                <span className="w-8 h-6 flex items-center justify-center border-t border-b border-gray-300 bg-white text-sm">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQuantity(service.id, cartItem.quantity + 1);
                  }}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200 text-sm"
                >
                  +
                </button>
              </div>
            )}
            
            <button 
              onClick={handleCartAction}
              className={`px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all ${
                isInCart 
                  ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                  : isInstantDelivery && isInstantDeliveryAvailable
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                    : isInstantDelivery && !isInstantDeliveryAvailable
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
              } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isDisabled}
            >
              {isInCart 
                ? 'Remove' 
                : isInstantDelivery && !isInstantDeliveryAvailable 
                  ? 'Not Available' 
                  : isInstantDelivery
                    ? 'Express Add'
                    : 'Add to Cart'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;