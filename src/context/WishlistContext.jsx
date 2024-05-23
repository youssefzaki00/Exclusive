import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../utils/supabase";
import { toast } from "react-toastify";
import { UserData } from "./UserData";

const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  inWishlist: () => {},
  fetchWishlist: () => {},
});

const WishlistProvider = ({ children }) => {
  const { user, setUser } = useContext(UserData);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = async (product) => {
    const { error } = await supabase
      .from("clients")
      .update({
        ...user,
        wishlist: [...wishlist, product],
      })
      .eq("id", user?.id)
      .select();
    if (error) {
      toast.error("Failed adding product to your wishlist try again.");
      console.log(error.message);
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Product Added to your wishlist successfully");
      setUser({ ...user, wishlist: [...wishlist, product] });
    }
  };

  const removeFromWishlist = async (productId) => {
    let filteredList = wishlist.filter((product) => product.id != productId);

    const { error } = await supabase
      .from("clients")
      .update({
        ...user,
        wishlist: filteredList,
      })
      .eq("id", user?.id)
      .select();
    if (error) {
      toast.error("Failed removing product from your wishlist try again.");
      console.log(error.message);
    } else {
      setUser({
        ...user,
        wishlist: filteredList,
      });
      setWishlist(filteredList);
      toast.success("Product removed from your wishlist successfully");
    }
  };
  const removeAllWishlist = async () => {
    const { error } = await supabase
      .from("clients")
      .update({
        ...user,
        wishlist: [],
      })
      .eq("id", user?.id)
      .select();
    if (error) {
      console.log(error.message);
    } else {
      setWishlist([]);
      setUser({
        ...user,
        wishlist: [],
      });
    }
  };

  const fetchWishlist = async () => {
    if (user) {
      let { data } = await supabase
        .from("clients")
        .select("wishlist")
        .eq("id", user?.id);
      const parsedWishList = data[0]?.wishlist?.map((e) => JSON.parse(e));
      setWishlist(parsedWishList);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    removeAllWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
