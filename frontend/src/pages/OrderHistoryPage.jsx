import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ClockIcon,
  TruckIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const statusConfig = {
  pending: { color: 'bg-yellow-100 text-yellow-800', icon: ClockIcon },
  processing: { color: 'bg-blue-100 text-blue-800', icon: ClockIcon },
  delivered: { color: 'bg-green-100 text-green-800', icon: CheckCircleIcon },
  cancelled: { color: 'bg-red-100 text-red-800', icon: XCircleIcon },
  completed: { color: 'bg-purple-100 text-purple-800', icon: TruckIcon },
};      

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
    if (userData?.uid) {
      fetchOrders(userData.uid);
    }
  }, []);

  const fetchOrders = async (uid) => {
    try {
      const q = query(collection(db, 'cartdetails'), where('userId', '==', uid));
      const querySnapshot = await getDocs(q);
  
      const ordersData = [];
      querySnapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() });
      });
  
      // Sort by createdAt (newest first)
      ordersData.sort((a, b) => {
        const dateA = a.createdAt?.toDate() || new Date(0); // Default to epoch if createdAt is missing
        const dateB = b.createdAt?.toDate() || new Date(0);
        return dateB - dateA;
      });
  
      setOrders(ordersData);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return;
    
    try {
      await updateDoc(doc(db, 'cartdetails', orderId), {
        status: 'cancelled',
        updatedAt: new Date()
      });
      
      // Update local state
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: 'cancelled' } : order
      ));
      
      alert('Order cancelled successfully');
    } catch (error) {
      console.error('Error cancelling order:', error);
      alert('Failed to cancel order');
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading your orders...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-20">
      <Helmet>
        <title>My Orders - Andes Laundry</title>
      </Helmet>

      <div className=" container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-600 mt-2">View your past and current orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-xl font-medium text-gray-700 mb-4">No orders found</h2>
            <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => {
                    const status = statusConfig[order.status];
                    const Icon = status.icon;
                    
                    return (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{order.orderNumber || order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(order.orderTimestamp || order.createdAt?.toDate() || new Date()).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.totalItems || Object.keys(order.services || {}).length}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ₹{order.totalCost?.toFixed(2) || order.total?.toFixed(2) || '0.00'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status.color}`}>
                            <Icon className="h-3 w-3 mr-1 mt-0.5" />
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <Link
                        to={`/orders/${order.orderNumber || order.id}`}  // Fixed the typo here
                        className="text-blue-600 hover:text-blue-900"
                        >
                        View
                        </Link>
                        <Link
                            to={`/track-order/${order.orderNumber}`}  // NEW: Track button
                            className="text-green-600 hover:text-green-900"
                        >
                            Track
                        </Link>
                          {order.status === 'pending' && (
                            <button
                              onClick={() => handleCancelOrder(order.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;