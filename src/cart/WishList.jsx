import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import RelatedProducts from "../components/RelatedProducts";
// import useUserData from "./../hooks/useUserData";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

function WishList() {
  const { wishlist } = useContext(WishlistContext);
  const { addAllToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const wishListProducts = wishlist || [];
  const moveAllToCart = () => {
    addAllToCart(wishListProducts);
    navigate("/cart");
  };
  return (
    <div className="CustomContainer mt-20 mb-[140px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Wishlist ({wishListProducts?.length})</h2>
        <button
          onClick={moveAllToCart}
          className="px-12 py-4 text-center border border-black border-opacity-50 rounded"
        >
          Move All To Bag
        </button>
      </div>
      <div className="grid lg:grid-cols-4 mt-[60px] gap-[30px] mb-20">
        {wishListProducts.length > 0 ? (
          wishListProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <div className="w-full col-span-4 text-4xl font-medium text-center">
            Wishlist is Empty
          </div>
        )}
      </div>
      <RelatedProducts />
    </div>
  );
}

export default WishList;
