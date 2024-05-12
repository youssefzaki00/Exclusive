import { useParams } from "react-router";
import RoadMap from "./RoadMap";
import img from "../assets/products/Remove-bg.ai_1714426586425.png";
import Star from "./Star";
import Delivery from "../assets/Icons/Delivery2.svg";
import returnDelivery from "../assets/Icons/return.svg";
function ProductDetails() {
  const params = useParams();
  const review = 4;
  return (
    <div className="CustomContainer capitalize">
      <RoadMap />
      <div className="grid lg:grid-cols-7 mb-[140px]">
        <div className="flex lg:grid grid-cols-1 mb-4 lg:mb-0 gap-2 lg:gap-4 lg:mr-[30px] lg:col-span-1">
          <div className="bg-secondary1 rounded p-2 lg:p-4 flex justify-center items-center">
            <img
              src={img}
              alt="product image"
              className=" object-contain  rotate-45  transform w-full h-full"
            />
          </div>
          <div className="bg-secondary1 rounded p-2 lg:p-4 flex justify-center items-center">
            <img
              src={img}
              alt="product image"
              className=" object-contain -rotate-45  transform w-full h-full"
            />
          </div>
          <div className="bg-secondary1 rounded p-2 lg:p-4 flex justify-center items-center">
            <img
              src={img}
              alt="product image"
              className=" object-contain  -rotate-90  transform w-full h-full"
            />
          </div>
          <div className="bg-secondary1 rounded p-2 lg:p-4 flex justify-center items-center">
            <img
              src={img}
              alt="product image"
              className=" object-contain rotate-180 transform  w-full h-full"
            />
          </div>
        </div>
        <div className="bg-secondary1 rounded py-4 max-lg:mb-4 px-[30px] flex items-center justify-center lg:col-span-3">
          <img src={img} alt="product image" className=" object-contain" />
        </div>
        <div className="lg:col-span-3 lg:ml-[70px]">
          <h2 className="font-semibold text-2xl">{params.name}</h2>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-0 stars -mt-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} color={index < review ? "orange" : "gray"} />
              ))}
            </div>
            <p className="text-text2 text-sm border-r border-text2 px-2">
              (150 Reviews)
            </p>
            <p className="text-button1">in stock</p>
          </div>
          <p className="mt-4 text-2xl">$192.00</p>
          <p className="text-sm border-b border-text2 py-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <form className="max-w-xs mx-auto">
              <div className="relative flex items-center max-w-[8rem]  border-border-[#808080]">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="active:bg-button2 hover:bg-button2 border border-[#808080]
                  p-3 h-11 focus:outline-none group rounded-l  "
                >
                  <svg
                    className="w-3 h-3 text-gray-900 active:text-text1 group-hover:text-text1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-y border-[#808080] h-11 text-center text-gray-900 text-sm block w-full py-2.5 "
                  placeholder="999"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="active:bg-button2 hover:bg-button2 border border-[#808080] rounded-r p-3 h-11  focus:outline-none group"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 active:text-text1 group-hover:text-text1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <button className="bg-button2 text-text1 font-medium p-3 lg:px-12 rounded hover:bg-buttonHover1 active:shadow-inner shadow text-xs lg:text-base">
              Buy Now
            </button>
            <button className="border border-[#808080] rounded p-1 ">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="border border-[#808080] rounded  mt-10">
            <div className="flex gap-4   pt-6 p-4 border-b border-[#808080] ">
              <img src={Delivery} alt="Delivery" />
              <div className="flex flex-col gap-2">
                <h4 className="font-medium">Free Delivery</h4>
                <p className="underline text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded  pt-6 p-4">
              <img src={returnDelivery} alt="returnDelivery" />
              <div className="flex flex-col gap-2">
                <h4 className="font-medium">Return Delivery</h4>
                <p className=" text-xs">
                  Free 30 Days Delivery Returns.
                  <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RelatedProducts/> */}
    </div>
  );
}

export default ProductDetails;
