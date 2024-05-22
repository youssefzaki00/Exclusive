import SectionHeader from "./../components/SectionHeader";
import arrowRight from "../assets/Icons/arrow-right.svg";
import arrowLeft from "../assets/Icons/arrow-left.svg";
import CellPhone from "../assets/Icons/Category-CellPhone.svg";
import Camera from "../assets/Icons/Category-Camera.svg";
import Computer from "../assets/Icons/Category-Computer.svg";
import Gamepad from "../assets/Icons/Category-Gamepad.svg";
import Headphone from "../assets/Icons/Category-Headphone.svg";
import SmartWatch from "../assets/Icons/Category-SmartWatch.svg";

function Categories() {
  const categoriesData = [
    { title: "CellPhone", img: CellPhone },
    { title: "Computer", img: Computer },
    { title: "SmartWatch", img: SmartWatch },
    { title: "Camera", img: Camera },
    { title: "Headphone", img: Headphone },
    { title: "Gamepad", img: Gamepad },
  ];
  return (
    <div className="mt-20 CustomContainer">
      <SectionHeader content="Categories" />
      <div className="flex flex-col items-center justify-between mt-3 lg:flex-row ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[87px] capitalize max-lg:mb-8">
          <h2 className="text-4xl font-semibold">Browse By Category</h2>
        </div>
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
      <div className="grid grid-cols-2 lg:grid-cols-6 justify-center items-center gap-[30px] mt-10 overflow-hidden w-full relative border-b pb-[70px]">
        {categoriesData.map((data, i) => (
          <button
            key={i}
            className="border border-[#0000004D] rounded flex flex-col gap-4 max-w-[170px] h-[145px] justify-center items-center cursor-pointer hover:shadow-sm active:shadow-inner group hover:bg-secondary3 hover:text-text1"
          >
            <img
              loading="lazy"
              srcSet={data.img}
              alt={data.title}
              className="object-contain group-hover:invert"
            />
            <h3>{data.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Categories;
