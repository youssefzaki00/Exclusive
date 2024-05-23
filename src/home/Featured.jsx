import SectionHeader from "./../components/SectionHeader";
import perfume from "../assets/FeaturedSection/perfume.png";
import cloths from "../assets/FeaturedSection/cloths.png";
import speakers from "../assets/FeaturedSection/speakers.png";
import playstation from "../assets/FeaturedSection/playstation.png";
import Delivery from "../assets/Icons/Services=Delivery.svg";
import Customer from "../assets/Icons/Services=Customer service.svg";
import Money from "../assets/Icons/Services=Money back.svg";
import { Link } from "react-router-dom";
function Featured() {
  return (
    <div className="CustomContainer py-[140px] ">
      <SectionHeader content="Featured" />
      <h2 className="mt-5 text-4xl font-semibold mb-[60px]">New Arrival</h2>

      <div className="flex flex-col grid-cols-4 grid-rows-6 gap-2 lg:grid lg:gap-6 ">
        <div className="col-span-2 row-span-6 bg-black px-[30px] pt-[90px] rounded relative justify-center items-end flex">
          <img
            loading="lazy"
            srcSet={playstation}
            alt="playstation"
            className="object-contain "
          />
          <div className="absolute flex flex-col gap-4 bottom-8 left-8 text-text1">
            <h4 className="text-2xl font-semibold tracking-[0.03em] ">
              PlayStation 5
            </h4>
            <p className="text-sm ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              to="/Products"
              className="font-medium underline underline-offset-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div
          className="col-span-2 col-start-3 row-span-3 bg-black px-[30px] pt-[90px] pb-8 rounded relative
          flex justify-center items-start after:left-0 after:top-0 
          after:absolute after:bg-[#d9d9d9] after:opacity-30 
          after:blur-[100px] after:w-full after:h-full after:z-0 overflow-hidden"
        >
          <img
            loading="lazy"
            srcSet={cloths}
            alt="jacket"
            className="relative object-contain  z-[1]"
          />
          <div className="absolute flex flex-col gap-2 bottom-6 left-6 text-text1 z-[4]">
            <h4 className="text-2xl font-semibold tracking-[0.03em] ">
              men’s Collections
            </h4>
            <p className="text-sm ">
              Featured man collections that give you another vibe.
            </p>
            <Link
              to="/Products"
              className="font-medium underline underline-offset-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div
          className="col-start-3 row-span-3 row-start-4 bg-black px-[30px] pt-[90px] pb-8 rounded relative flex justify-center items-start  after:left-0 after:top-0
          after:absolute after:bg-[#d9d9d9] after:opacity-30 
          after:blur-[100px] after:w-full after:h-full after:z-0 overflow-hidden"
        >
          <img
            loading="lazy"
            srcSet={speakers}
            alt="speakers"
            className="relative object-contain h-full  z-[1]"
          />
          <div className="absolute flex flex-col gap-2 bottom-6 left-6 text-text1 z-[4]">
            <h4 className="text-2xl font-semibold tracking-[0.03em] ">
              Speakers
            </h4>
            <p className="text-sm ">Amazon wireless speakers</p>
            <Link
              to="/Products"
              className="font-medium underline underline-offset-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div
          className="col-start-4 row-span-3 row-start-4 bg-black px-[30px] pt-[90px] rounded relative flex justify-center items-start pb-8  after:left-0 after:top-0
          after:absolute after:bg-[#d9d9d9] after:opacity-30 
          after:blur-[100px] after:w-full after:h-full after:z-0 overflow-hidden"
        >
          <img
            loading="lazy"
            srcSet={perfume}
            alt="perfume"
            className="relative object-contain h-full  z-[1] "
          />
          <div className="absolute flex flex-col gap-2 bottom-6 left-6 text-text1 z-[4]">
            <h4 className="text-2xl font-semibold tracking-[0.03em] ">
              Perfume
            </h4>
            <p className="text-sm ">GUCCI INTENSE OUD EDP</p>
            <Link
              to="/Products"
              className="font-medium underline underline-offset-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mt-[140px] text-center">
        <div className="flex flex-col items-center justify-center">
          <img
            loading="lazy"
            srcSet={Delivery}
            alt="Delivery"
            className="object-contain w-20 h-20 mb-6"
          />
          <h5 className="mb-2 text-xl font-semibold">FREE AND FAST DELIVERY</h5>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            loading="lazy"
            srcSet={Customer}
            alt="Customer Service"
            className="object-contain w-20 h-20 mb-6"
          />
          <h5 className="mb-2 text-xl font-semibold">24/7 CUSTOMER SERVICE</h5>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            loading="lazy"
            srcSet={Money}
            alt="Money back"
            className="object-contain w-20 h-20 mb-6"
          />
          <h5 className="mb-2 text-xl font-semibold">MONEY BACK GUARANTEE</h5>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
