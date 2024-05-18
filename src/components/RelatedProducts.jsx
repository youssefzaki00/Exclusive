import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import useFetchProducts from "./../hooks/useFetchProducts";
function RelatedProducts() {
  const { products } = useFetchProducts();
  return (
    <>
      <div className="flex justify-between items-center mb-[60px]">
        <SectionHeader content="Related Item" />
        <button className="px-12 py-4 text-center border border-black border-opacity-50 rounded">
          See All
        </button>
      </div>
      <div className="grid lg:grid-cols-4 mt-[60px] gap-[30px] mb-20">
        {products.slice(3, 7).map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default RelatedProducts;
