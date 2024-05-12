import SectionHeader from "../components/SectionHeader";
import arrowRight from "../assets/Icons/arrow-right.svg";
import arrowLeft from "../assets/Icons/arrow-left.svg";
import ProductCard from "./../components/ProductCard";
import { useState } from "react";
import { isResponsive } from "../utils/utils";
function TodayOffer({ products }) {
  const [translate, setTranslate] = useState(0);

  const handleCarousel = (dir) => {
    let cardWidth = 230;
    const gap = 30;
    let moveAmount = cardWidth + gap;
    const totalCards = products.length;
    let maxTranslateValue = moveAmount * (totalCards - 3.5);
    if (isResponsive()) {
      cardWidth = 280;
      maxTranslateValue = moveAmount * (totalCards - 1);
      moveAmount = cardWidth + gap;
    }

    if (dir === "left" && -translate < maxTranslateValue) {
      setTranslate(translate - moveAmount);
    } else if (dir === "right" && translate <= 0) {
      if (translate + moveAmount > 0) {
        return;
      }
      setTranslate(translate + moveAmount);
    }
  };

  const counterSectionStyle = `flex w-12 flex-col items-center justify-center relative  after:content-[':'] after:-right-[17px] after:text-3xl after:text-button2 after:absolute last:after:content-['']`;
  return (
    <div className="CustomContainer mt-36">
      <SectionHeader content="Today's" />
      <div className="flex flex-col items-center justify-between mt-3 lg:flex-row ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[87px] capitalize max-lg:mb-8">
          <h2 className="text-4xl font-semibold">flash sales</h2>
          <div className="flex items-center gap-[17px]  text-center">
            <div className={`day ${counterSectionStyle} `}>
              <p className="text-xs font-medium ">days</p>
              <h3 className=" text-[32px] font-bold">03</h3>
            </div>

            <div className={`hour ${counterSectionStyle}`}>
              <p className="text-xs font-medium ">hours</p>
              <h3 className=" text-[32px] font-bold">23</h3>
            </div>

            <div className={`min ${counterSectionStyle}`}>
              <p className="text-xs font-medium ">minutes</p>
              <h3 className=" text-[32px] font-bold">17</h3>
            </div>

            <div className={`sec ${counterSectionStyle}`}>
              <p className="text-xs font-medium ">seconds</p>
              <h3 className=" text-[32px] font-bold">56</h3>
            </div>
          </div>
        </div>
        <div>
          <button
            className={`bg-secondary1 rounded-full p-4 mr-2 hover:shadow active:shadow-inner 
            `}
            onClick={() => handleCarousel("left")}
          >
            <img src={arrowLeft} alt="arrowLeft" />
          </button>
          <button
            className={`bg-secondary1 rounded-full p-4 mr-2 hover:shadow active:shadow-inner `}
            onClick={() => handleCarousel("right")}
          >
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-[30px] mt-10 p-2.5 overflow-hidden w-full h-full relative z-[2]">
        {products.map((data) => (
          <ProductCard key={data.id} data={data} translate={translate} />
        ))}
      </div>
      <div className="flex justify-center items-center  border-b pb-[60px]">
        <button
          href="#"
          className=" bg-button2 hover:bg-buttonHover1 text-text1 px-12 py-4 rounded 
          font-medium mt-[76px] capitalize text-center w-fit shadow active:shadow-inner"
        >
          view all products
        </button>
      </div>
    </div>
  );
}
export default TodayOffer;
