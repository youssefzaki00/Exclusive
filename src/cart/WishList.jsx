import ProductCard from "../components/ProductCard";
import RelatedProducts from "../components/RelatedProducts";

function WishList({ products }) {
  return (
    <div className="CustomContainer capitalize mt-20 mb-[140px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Wishlist ({products.length})</h2>
        <button className="text-center border border-black border-opacity-50 rounded px-12 py-4">
          Move All To Bag
        </button>
      </div>
      <div className="grid lg:grid-cols-4 mt-[60px] gap-[30px] mb-20">
        {products.map((data) => (
          <ProductCard key={data.name + data.description} data={data} />
        ))}
      </div>
      <RelatedProducts products={products} />
    </div>
  );
}

export default WishList;
