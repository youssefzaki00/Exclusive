import SectionHeader from "../components/SectionHeader";
import ProductCard from "./../components/ProductCard";
import arrowRight from "../assets/Icons/arrow-right.svg";
import arrowLeft from "../assets/Icons/arrow-left.svg";
import { Link } from "react-router-dom";
function OurProducts({ products }) {
  return (
    <div className="CustomContainer mt-[71px]">
      <SectionHeader content="our products" />
      <div className="flex flex-col items-center justify-between gap-8 mt-5 lg:flex-row">
        <h2 className="text-4xl font-semibold capitalize">
          Explore Our Products
        </h2>

        <div>
          <button
            className={`bg-secondary1 rounded-full p-4 mr-2 hover:shadow active:shadow-inner 
            `}
            // onClick={() => handleCarousel("left")}
          >
            <img src={arrowLeft} alt="arrowLeft" />
          </button>
          <button
            className={`bg-secondary1 rounded-full p-4 mr-2 hover:shadow active:shadow-inner `}
            // onClick={() => handleCarousel("right")}
          >
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4  items-center gap-[30px]  mt-10  w-full relative ">
        {products.slice(4, 8).map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-[60px]">
        <Link
          to="/Products"
          className=" bg-button2 hover:bg-buttonHover1 text-text1 px-12 py-4 rounded 
          font-medium mt-[76px] capitalize text-center w-fit shadow active:shadow-inner"
        >
          view all products
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;
