import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { CartProvider } from "./CartContext";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import MyOrders from "./pages/MyOrders";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("authToken")),
  );

  useEffect(() => {
    const handler = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("authToken")));
    };
    window.addEventListener("authStateChanged", handler);
    return () => window.removeEventListener("authStatusChanged", handler);
  }, []);

  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myorders" element={<MyOrders />} />

        <Route
          path="/cart"
          element={
            isAuthenticated ? <Cart /> : <Navigate replace to="/login" />
          }
        />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
