import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { Navigate, Outlet, Route, Routes } from "react-router";
import WishList from "./cart/WishList";
import Cart from "./cart/Cart";
import CheckOut from "./cart/CheckOut";
import Account from "./Auth/Account";
import Error from "./components/Error";
import About from "./static/About";
import Contact from "./static/Contact";
import ProductDetails from "./components/ProductDetails";
import CheckEmail from "./components/CheckEmail";
import useFetchProducts from "./hooks/useFetchProducts";
import Loading from "./components/Loader/Loading";
import useUserData from "./hooks/useUserData";

function App() {
  const { user, setUser } = useUserData();
  const [uid, setUid] = useState("");
  const { loading } = useFetchProducts();

  const GET_USER_UID = async () => {
    try {
      const { error } = await supabase.auth.onAuthStateChange((_, session) => {
        setUid(session?.user.id);
      });
      if (error) {
        console.error("Error getting user ID:", error);
      }
    } catch (error) {
      console.error("Error getting user ID:", error);
    }
  };
  const getUserData = async () => {
    if (!uid) return;
    try {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("id", uid);

      setUser(data[0]);
      if (error) {
        console.error("Error fetching user data:", error);
        return [];
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    GET_USER_UID();
    getUserData();
  }, [uid]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TopHeader />
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Login" element={user ? <Home /> : <Login />} />
            <Route path="/SignUp" element={user ? <Home /> : <SignUp />} />
            <Route
              path="/Cart"
              element={!user ? <Navigate to="/login" replace /> : <Cart />}
            />
            <Route
              path="/wishlist"
              element={!user ? <Navigate to="/login" replace /> : <WishList />}
            />
            <Route
              path="/CheckEmail"
              element={
                localStorage.getItem("checkEmail") == true ? (
                  <CheckEmail />
                ) : (
                  <Error />
                )
              }
            />
            <Route
              path="/My Account"
              element={!user ? <Navigate to="/login" replace /> : <Account />}
            />
            <Route
              path="/checkout"
              element={
                user?.cart_products?.length > 0 ? <CheckOut /> : <Cart />
              }
            />
            <Route path="/:category/:name" element={<ProductDetails />} />
          </Routes>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
