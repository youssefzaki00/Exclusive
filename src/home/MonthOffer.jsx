import SectionHeader from "../components/SectionHeader";
import ProductCard from "./../components/ProductCard";
import OfferImage from "../assets/ThisMonthSection/monthOfferImg.png";
import { Link } from "react-router-dom";
function MonthOffer({ products }) {
  const counterSectionStyle = `flex w-[62px] h-[62px] flex-col items-center
          justify-center relative bg-primary1 text-text3 rounded-full`;
  return (
    <div className="CustomContainer mt-36">
      <SectionHeader content="This Month" />
      <div className="flex flex-col items-center justify-between gap-8 mt-5 lg:flex-row">
        <h2 className="text-4xl font-semibold capitalize">
          Best Selling Products
        </h2>
        <Link
          to="/Products"
          className=" bg-button2 hover:bg-buttonHover1 text-text1 px-12 py-4 rounded 
          font-medium mt-[76px] capitalize text-center w-fit shadow active:shadow-inner"
        >
          view all products
        </Link>
      </div>
      <div className="grid lg:grid-cols-4  items-center gap-[30px] mt-10 w-full relative ">
        {products.slice(2, 6).map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
      <div
        className="grid lg:grid-cols-2 items-center justify-center lg:justify-between
        w-full h-[500px] col-span-3 py-14 lg:px-16 text-left
        bg-black mt-[140px] text-primary1 capitalize"
      >
        <div className="flex flex-col gap-8 px-6 ">
          <div className="flex flex-col gap-8">
            <p className="font-semibold text-button1">categories</p>
            <h2 className="text-3xl font-semibold lg:text-5xl">
              enhance your listening experience
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:flex items-center gap-[17px] w-fit text-center">
            <div className={`day ${counterSectionStyle} `}>
              <h3 className="font-semibold">03</h3>
              <p className="text-[11px] ">days</p>
            </div>

            <div className={`hour ${counterSectionStyle}`}>
              <h3 className="font-semibold">23</h3>
              <p className="text-[11px] ">hours</p>
            </div>

            <div className={`min ${counterSectionStyle}`}>
              <h3 className="font-semibold">17</h3>
              <p className="text-[11px] ">minutes</p>
            </div>

            <div className={`sec ${counterSectionStyle}`}>
              <h3 className="font-semibold">56</h3>
              <p className="text-[11px] ">seconds</p>
            </div>
          </div>
          <a
            href="#"
            className="gap-2 p-2 px-12 py-4 font-medium text-center rounded w-fit bg-button1 "
          >
            buy now!
          </a>
        </div>
        <div
          className="relative after:left-0 after:top-0
          after:absolute after:bg-[#d9d9d9] after:opacity-30 
          after:blur-[100px] after:w-full after:h-full after:z-0"
        >
          <img
            src={OfferImage}
            alt="HeroSection"
            className="relative object-contain w-0 h-full lg:w-fit z-[1] "
          />
        </div>
      </div>
    </div>
  );
}

export default MonthOffer;
