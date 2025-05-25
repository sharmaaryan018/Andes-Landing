import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

const ServiceCard = ({ service }) => {
  const { addToCart, removeFromCart, updateQuantity, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Check if this service is already in cart
  const cartItem = cartItems.find(item => item.id === service.id);
  const isInCart = Boolean(cartItem);

  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(service.id);
    } else {
      addToCart({ ...service, quantity });
      setQuantity(1);
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
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">
        {service.discount}% OFF
      </div>
      
      {/* Service Image */}
      <div className="h-48 overflow-hidden">
        <img
          loading="lazy"

          src={service.image} 
          alt={service.displayName} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Service Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.displayName}</h3>
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
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
              }`}
            >
              {isInCart ? 'Remove' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;