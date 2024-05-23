import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { toast } from "react-toastify";
import { UserData } from "./UserData";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  fetchCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user, setUser } = useContext(UserData);

  const addToCart = async (product) => {
    const cartList = cart ? cart : [];
    const { error } = await supabase
      .from("clients")
      .update({
        ...user,
        cart: [...cartList, product],
      })
      .eq("id", user?.id)
      .select();
    if (error) {
      toast.error("Failed adding product to your cart try again.");
      console.log(error.message);
    } else {
      setCart([...cartList, product]);
      setUser({ ...user, cart: [...cartList, product] });
      toast.success("Product Added to your cart successfully");
    }
  };
  const addAllToCart = async (products) => {
    const cartList = cart ? cart : [];
    const { error } = await supabase
      .from("clients")
      .update({
        ...user,
        cart: [...cartList, ...products],
      })
      .eq("id", user?.id)
      .select();
    if (error) {
      toast.error("Failed adding product to your cart try again.");
      console.log(error.message);
    } else {
      setCart([...cartList, ...products]);
      setUser({ ...user, cart: [...cartList, ...products] });
      toast.success("Products Added to your cart successfully");
    }
  };
  const removeFromCart = async (productId) => {
    let filteredCart = cart?.filter((product) => product.id != productId);

    const { error } = await supabase
      .from("clients")
      .update({
        ...user,
        cart: filteredCart,
      })
      .eq("id", user?.id)
      .select();
    if (error) {
      toast.error("Failed removing product from your cart try again.");
      console.log(error.message);
    } else {
      setCart(filteredCart);
      setUser({
        ...user,
        cart: filteredCart,
      });
      toast.success("Product removed from your cart successfully");
    }
  };
  const fetchCart = async () => {
    if (user) {
      let { data } = await supabase
        .from("clients")
        .select("cart")
        .eq("id", user?.id);
      const parsedCartArr = data[0]?.cart?.map((e) => JSON.parse(e));
      setCart(parsedCartArr);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const value = {
    cart,
    addToCart,
    addAllToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
