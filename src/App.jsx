import { useState, useEffect, useContext } from "react";
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
import { UserData } from "./context/UserData";

function App() {
  const [products, setProducts] = useState([]);
  const { setUser } = useContext(UserData);
  const [uid, setUid] = useState("");

  const getProducts = async () => {
    try {
      const { data, error } = await supabase.from("Products").select();
      if (error) {
        console.error("Error fetching products:", error);
        return [];
      }

      return data;
    } catch (error) {
      console.error("Unexpected error fetching products:", error);
    }
  };
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
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
    GET_USER_UID();
    getUserData();
  }, [uid]);
  const cartIsEmpty = false;
  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home products={products} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />

        <Route path="/My Account" element={<Account />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart products={products} />} />
        <Route path="/wishlist" element={<WishList products={products} />} />
        <Route
          path="/checkout"
          element={
            cartIsEmpty ? (
              <Navigate to="/Cart" />
            ) : (
              <CheckOut products={products.slice(0, 2)} />
            )
          }
        />
        <Route path="/:category/:name" element={<ProductDetails />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
