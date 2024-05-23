import { Link } from "react-router-dom";
import heroImg from "../assets/HeroSection/heroImage.png";
import Apple from "../assets/Icons/Apple_gray_logo 1.png";
import arrowRight from "../assets/Icons/arrow-right.svg";
function HeroSection() {
  const sections = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <div className="flex flex-col items-center justify-center grid-cols-4 pt-10 text-center CustomContainer lg:text-left after:w-0 lg:grid gap-11">
      <ul className="heroSection__nav w-full items-center h-full col-span-1 flex flex-col gap-2 relative after:bg-[#e5e7eb] after:absolute lg:after:w-[0.8px] after:-top-10 after:h-[110%] after:right-0">
        {sections.map((section) => (
          <li
            key={section}
            className="w-4/5 p-2 -ml-2 rounded cursor-pointer hover:bg-buttonHover2"
          >
            {section}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between w-full h-full col-span-3 py-4 pl-16 text-left bg-black text-primary1">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-6">
            <img srcSet={Apple} alt="Apple" className="object-contain w-10 " />
            <p>iPhone 14 Series</p>
          </div>
          <h2 className="text-5xl font-semibold leading-tight tracking-wide ">
            Up to 10% off Voucher
          </h2>
          <Link to="/Products" className="flex gap-2 p-2 underline">
            Shop Now
            <img src={arrowRight} alt="arrowRight" className=" invert" />
          </Link>
        </div>
        <img
          srcSet={heroImg}
          alt="HeroSection"
          className="object-contain w-0 h-full lg:w-96"
        />
      </div>
    </div>
  );
}
export default HeroSection;
