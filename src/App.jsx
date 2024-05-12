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
import About from "./About";
import Contact from "./Contact";
import ProductDetails from "./components/ProductDetails";
import CheckEmail from "./components/CheckEmail";
import useFetchProducts from "./hooks/useFetchProducts";
import Loading from "./components/Loader/Loading";
import useUserData from "./hooks/useUserData";

function App() {
  const { setUser } = useUserData();
  const [uid, setUid] = useState("");
  const { loading } = useFetchProducts();

  const GET_USER_UID = async () => {
    await supabase.auth.onAuthStateChange((_, session) => {
      setUid(session?.user.id);
    });
  };
  const getUserData = async () => {
    try {
      const { data, error } = await supabase.from("clients").select("*");
      const filteredUser = data?.filter((user) => user.id == uid)[0];
      setUser(filteredUser);
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
  const cartIsEmpty = false;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TopHeader />
          <Header />
          <Routes>
            <Route path="/*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/CheckEmail" element={<CheckEmail />} />

            <Route path="/My Account" element={<Account />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route
              path="/checkout"
              element={cartIsEmpty ? <Navigate to="/Cart" /> : <CheckOut />}
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
