import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import RelatedProducts from "../components/RelatedProducts";
import useFetchProducts from "../hooks/useFetchProducts";
import { SearchContext } from "../context/SearchContext";

function Products() {
  const { products } = useFetchProducts();
  const { searchResult } = useContext(SearchContext);

  return (
    <div className="CustomContainer mt-20 mb-[140px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">
          Products ({searchResult ? searchResult.length : products?.length})
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 mt-[60px] gap-[30px] mb-20">
        {searchResult
          ? searchResult.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
      </div>
      <RelatedProducts />
    </div>
  );
}

export default Products;
