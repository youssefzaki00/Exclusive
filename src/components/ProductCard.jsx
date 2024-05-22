import Star from "./Star";
import Cart from "../assets/Icons/Cart1-white.svg";
import WishlistIcon from "../assets/Icons/Wishlist.svg";
import wishlistRed from "../assets/Icons/wishlistRed.svg";
import QuickView from "../assets/Icons/QuickView.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function ProductCard(props) {
  const { data, translate } = props;
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [inWishlist, setInWishList] = useState(false);
  const [inCart, setInCart] = useState(false);
  const review = 5;
  useEffect(() => {
    const result = wishlist?.some((product) => product?.id == data?.id);
    setInWishList(result);
  }, [wishlist, data]);
  useEffect(() => {
    const result = cart?.some((product) => product?.id === data?.id);
    setInCart(result);
  }, [cart, data]);

  const handleWishlistAction = () => {
    if (inWishlist == true) {
      removeFromWishlist(data?.id);
    } else {
      addToWishlist(data);
    }
  };
  const handleCartAction = () => {
    if (inCart == true) {
      removeFromCart(data?.id);
    } else {
      addToCart(data);
    }
  };
  return (
    <div
      key={data.id}
      style={{
        translate: `${translate}px`,
      }}
      className={`flex flex-col gap-2 min-w-[280px] lg:min-w-[230px] group-[]:min-w-full transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 cursor-pointer group`}
    >
      <div className="flex justify-center items-center rounded mb-2 bg-secondary1 p-3 h-[250px] relative">
        <img
          loading="lazy"
          src={data?.image}
          alt="product image"
          className="object-contain max-w-32"
        />
        <p className="absolute px-3 py-1 text-xs rounded bg-secondary3 text-text1 top-3 left-3 ">
          -35%
        </p>
        <div className="absolute flex flex-col gap-2 top-3 right-3">
          <button type="button" onClick={handleWishlistAction}>
            <img
              src={inWishlist == true ? wishlistRed : WishlistIcon}
              alt="Wishlist"
              className="object-contain p-1 w-[34px] rounded-full cursor-pointer bg-secondary2 hover:shadow active:shadow-inner"
            />
          </button>
          <Link className="w-[34px]" to={`/${data?.category}/${data?.name}`}>
            <img
              src={QuickView}
              alt="Quick View of product"
              className="object-contain p-1 w-[34px] rounded-full cursor-pointer bg-secondary2 hover:shadow active:shadow-inner"
            />
          </Link>
        </div>
        <button
          onClick={handleCartAction}
          className="absolute bottom-0 left-0 items-center justify-center hidden w-full gap-2 py-2 text-center transition-all duration-200 bg-black text-primary1 group-hover:flex"
        >
          <img src={Cart} alt="Cart" />
          <p>{inCart == true ? "remove from cart" : "add to Cart"}</p>
        </button>
      </div>
      <p className="font-medium text-text3 ">{data.name}</p>
      <p className="font-medium text-secondary3 ">
        ${data?.price?.toFixed(2)}
        <span className="ml-3 line-through text-text2">
          ${(Number(data?.price) / 0.65).toFixed(2)}
        </span>
      </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 stars ">
          {[...Array(5)].map((_, index) => (
            <Star key={index} color={index < review ? "orange" : "gray"} />
          ))}
        </div>
        <p className="text-sm font-semibold text-text2">({data.stock})</p>
      </div>
    </div>
  );
}

export default ProductCard;
