import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import Working from "./pages/Working";
// import AndesAssured from "./pages/AndesAssured";
import "./locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Other from "./pages/Other";
import './App.css';
import IntercomComponent from './intercom'; 
import DownloadPage from './pages/DownloadPage';
import NewServicePage from './pages/NewServicePage';
import data from './data';
import ServiceFooter from './components/ServiceFooter';
import PrivacyPolicy from "./pages/privacypolicy";
// import TestFirestore from "./pages/TesrFirestore";
// import ShowUsers from "./pages/ShowUsers";
// import Register from "./Register"; 
import AddressForm from "./AddressForm";  
import CartPage from "./pages/CartPage";
import { CartProvider } from "./components/CartContext";
import OrderConfirmation from "./pages/OrderConfirmationPage";
import ProtectedOrderRoute from "./pages/ProtectedOrderRoute";
import OrderDetails from "./pages/OrderDetails";
import OrderHistory from "./pages/OrderHistoryPage";
import TrackOrder from "./pages/OrderTrackingPage";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      resetNativeScroll: true
    });

    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
            <Toaster position="top-center" reverseOrder={false} />

      <Navbar />

      <div ref={scrollRef} className="flex flex-col min-h-screen scroll-container">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/working" element={<Working />} />
            {/* <Route path="/andes-assured" element={<AndesAssured />} /> */}
            <Route path="/other" element={<Other />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/services" element={<NewServicePage data={data} />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
            {/* <Route path="/test" element={<TestFirestore />} /> */}
            {/* <Route path="/show-users" element={<ShowUsers />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/address-form" element={<AddressForm />} />
            <Route 
              path="/order-confirmation/:orderNumber" 
              element={
                
                <ProtectedOrderRoute>
                  <OrderConfirmation />
                </ProtectedOrderRoute>
              } 
            />
            <Route 
              path="/orders/:orderNumber" 
              element={
                <ProtectedOrderRoute>
                  <OrderDetails />
                </ProtectedOrderRoute>
              } 
            />
            <Route path="*" element={
              <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-2xl font-bold">404 Not Found</h1>
              </div>
            } />
            <Route path="/my-orders" element={ <OrderHistory />} />
            <Route path="/track-order/:orderNumber" element={<TrackOrder />} />
          </Routes>
        </div>

        <ServiceFooter />
      </div>

      <IntercomComponent />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
            <AuthProvider>

      <CartProvider>
        <App />
      </CartProvider>
      </AuthProvider>

    </Router>
  );
}