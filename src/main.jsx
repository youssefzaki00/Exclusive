import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserDataProvider from "./context/UserData.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <CartProvider>
          <WishlistProvider>
            <SearchProvider>
              <App />
              <ScrollToTop />
              <ToastContainer />
            </SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </UserDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
