import searchIcon from "../assets/Icons/SearchIcon.svg";
import wishlist from "../assets/Icons/Wishlist.svg";
import wishlistWhite from "../assets/Icons/WishlistWhite.svg";
import cart from "../assets/Icons/Cart1.svg";
import cartWhite from "../assets/Icons/Cart1-white.svg";
import Account from "../assets/Icons/User=Off.svg";
import AccountWhite from "../assets/Icons/UserWhite.svg";
import menu from "../assets/Icons/burger-menu.svg";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../utils/supabase";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import useUserData from "../hooks/useUserData";
import useFetchProducts from "./../hooks/useFetchProducts";
import { SearchContext } from "../context/SearchContext";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useUserData();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { products } = useFetchProducts();
  const { setSearchResult } = useContext(SearchContext);
  function search(e) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(filteredProducts);
  }
  async function signOut() {
    let { error } = await supabase.auth.signOut();
    setUser("");
    navigate("/login");
    if (error) {
      console.log(error);
      toast.error(error);
    }
  }
  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      if (session !== null) {
        if (session?.user?.aud == "authenticated") {
          setIsUser(true);
        }
      } else {
        setIsUser(false);
      }
    });
  }, [isUser]);
  return (
    <div className="capitalize border-b ">
      <div className="flex items-center justify-between w-full grid-cols-12 py-4 max-lg:px-2 CustomContainer lg:grid ">
        <h1 className="col-span-3 text-2xl font-bold">
          <Link to="/">exclusive</Link>
        </h1>
        <button
          className={`${
            isMenuActive ? "top-8 fixed" : "relative"
          } block right-2 z-[5] lg:hidden`}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <img src={menu} alt="menu" />
        </button>
        <div
          className={`${
            isMenuActive ? "left-0" : "-left-[9600px]"
          } max-lg:fixed z-[3] duration-300 top-0 w-full transition-all h-full max-lg:bg-primary1 flex flex-col-reverse justify-end items-center p-8 gap-8 
        lg:grid grid-cols-12 col-span-9 lg:p-0`}
        >
          <ul className="flex flex-col items-center col-span-6 gap-6 lg:flex-row xl:gap-8">
            <li className="relative before:absolute before:-bottom-0 before:left-0 before:h-0 before:bg-[#808080]  before:w-full  hover:before:h-px">
              <Link to="/" onClick={() => setIsMenuActive(false)}>
                home
              </Link>
            </li>
            <li className="relative before:absolute before:bottom-0 before:left-0 before:h-0 before:bg-[#808080]  before:w-full  hover:before:h-px">
              <Link to="/contact" onClick={() => setIsMenuActive(false)}>
                contact
              </Link>
            </li>
            <li className="relative before:absolute before:bottom-0 before:left-0 before:h-0 before:bg-[#808080] before:w-full  hover:before:h-px">
              <Link to="/about" onClick={() => setIsMenuActive(false)}>
                about
              </Link>
            </li>
            <li className="relative before:absolute before:bottom-0 before:left-0 before:h-0 before:bg-[#808080] before:w-full hover:before:h-px">
              {isUser ? (
                <Link
                  to="/"
                  onClick={() => {
                    signOut();
                    toast.success("You Signed Out Successfully");
                    setIsMenuActive(false);
                  }}
                >
                  Sign Out
                </Link>
              ) : (
                <Link
                  to="/signup"
                  onClick={() => {
                    setIsMenuActive(false);
                  }}
                >
                  sign up
                </Link>
              )}
            </li>
          </ul>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-[30px] col-span-6 -ml-5">
            <div className="max-w-md mx-auto ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  onKeyUp={(e) => search(e)}
                  type="search"
                  id="default-search"
                  className="block lg:min-w-40 w-full px-5 py-[7px] placeholder:text-xs text-sm text-gray-900 border rounded bg-gray-50 "
                  placeholder="What are you looking for ?"
                />
                <div className="absolute inset-y-0 flex items-center pr-3 pointer-events-none end-0">
                  <img src={searchIcon} alt="search Icon" />
                </div>
              </div>
            </div>
            <div className="grid items-center grid-cols-3 gap-2">
              <Link
                to="/wishlist"
                className={` p-2 flex items-center justify-center ${
                  location.pathname == "/wishlist"
                    ? " rounded-full bg-button2"
                    : ""
                }`}
                onClick={() => setIsMenuActive(false)}
              >
                <img
                  src={
                    location.pathname == "/wishlist" ? wishlistWhite : wishlist
                  }
                  alt="wishlist"
                />
              </Link>
              <Link
                to="/cart"
                className={`px-2 py-3 flex items-center justify-center ${
                  location.pathname == "/cart" ? " rounded-full bg-button2" : ""
                }`}
                onClick={() => setIsMenuActive(false)}
              >
                <img
                  src={location.pathname == "/cart" ? cartWhite : cart}
                  alt="cart"
                />
              </Link>
              <Link
                to="/My Account"
                className={` p-2 flex items-center justify-center ${
                  location.pathname == "/My%20Account"
                    ? " rounded-full bg-button2"
                    : ""
                }`}
                onClick={() => setIsMenuActive(false)}
              >
                <img
                  src={
                    location.pathname == "/My%20Account"
                      ? AccountWhite
                      : Account
                  }
                  alt="My Account"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
