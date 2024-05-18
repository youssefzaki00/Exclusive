import RoadMap from "../components/RoadMap";
import Services from "../assets/Icons/Services.svg";
import Services1 from "../assets/Icons/Services1.svg";
import Services2 from "../assets/Icons/Services2.svg";
import Services3 from "../assets/Icons/Services3.svg";
import about1 from "../assets/AboutSection/image 46.png";
import about2 from "../assets/AboutSection/image 48.png";
import twitter from "../assets/Icons/icon-twitter2.svg";
import instagram from "../assets/Icons/icon-instagram2.svg";
import Linkedin from "../assets/Icons/Icon-Linkedin2.svg";
import Money from "../assets/Icons/Services=Money back.svg";
import Customer from "../assets/Icons/Services=Customer service.svg";
import Delivery from "../assets/Icons/Services=Delivery.svg";

function About() {
  return (
    <div className="CustomContainer ">
      <RoadMap />
      <div className="mb-[140px]">
        <h1 className="capitalize text-[54px] font-semibold mb-10">
          our story
        </h1>
        <p className="mb-6">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 millions customers across
          the region.
        </p>
        <p>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assortment in categories ranging from
          consumer.
        </p>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[140px]">
        <li className="rounded border py-[30px]  cursor-pointer flex items-center justify-center flex-col gap-4 group">
          <img src={Services} alt="Shop" className="" />
          <h2 className="font-bold text-[32px] text-center">10.5K</h2>
          <p>sellers active our site</p>
        </li>
        <li className="rounded border py-[30px] cursor-pointer flex items-center justify-center flex-col gap-4 group">
          <img src={Services1} alt="Shop" className="" />
          <h2 className="font-bold text-[32px] text-center">33K</h2>
          <p>Monthly Product Sale</p>
        </li>
        <li className="rounded border py-[30px] cursor-pointer flex items-center justify-center flex-col gap-4 group">
          <img src={Services2} alt="Shop" className="" />
          <h2 className="font-bold text-[32px] text-center">45.5K</h2>
          <p>Customer active in our site</p>
        </li>
        <li className="rounded border py-[30px] cursor-pointer flex items-center justify-center flex-col gap-4 group">
          <img src={Services3} alt="Shop" className="" />
          <h2 className="font-bold text-[32px] text-center">25K</h2>
          <p>Annual gross sale in our site</p>
        </li>
      </ul>
      <ul className="flex flex-col items-center justify-center lg:grid grid-cols-3 gap-[30px] mb-[140px]">
        <li>
          <img src={about1} alt="" />
          <h2 className="font-medium text-[32px] mt-[32px]">Ahmed hussein</h2>
          <p className="mt-2">Founder & Chairman</p>
          <div className="flex items-center gap-4 mt-4">
            <img src={twitter} alt="twitter" className="w-8" />
            <img src={Linkedin} alt="Linkedin" className="w-8" />
            <img src={instagram} alt="instagram" className="w-8" />
          </div>
        </li>
        <li>
          <img src={about2} alt="" />
          <h2 className="font-medium text-[32px] mt-[32px]">hussein nasser</h2>
          <p className="mt-2">Managing Director</p>
          <div className="flex items-center gap-4 mt-4">
            <img src={twitter} alt="twitter" className="w-8" />
            <img src={Linkedin} alt="Linkedin" className="w-8" />
            <img src={instagram} alt="instagram" className="w-8" />
          </div>
        </li>
        <li>
          <img src={about2} alt="" />
          <h2 className="font-medium text-[32px] mt-[32px]">osama ahmed</h2>
          <p className="mt-2">Product Designer</p>
          <div className="flex items-center gap-4 mt-4">
            <img src={twitter} alt="twitter" className="w-8" />
            <img src={Linkedin} alt="Linkedin" className="w-8" />
            <img src={instagram} alt="instagram" className="w-8" />
          </div>
        </li>{" "}
      </ul>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-[140px] p-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src={Delivery}
            alt="Delivery"
            className="object-contain w-20 h-20 mb-6"
          />
          <h5 className="mb-2 text-xl font-semibold">FREE AND FAST DELIVERY</h5>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Customer}
            alt="Customer Service"
            className="object-contain w-20 h-20 mb-6"
          />
          <h5 className="mb-2 text-xl font-semibold">24/7 CUSTOMER SERVICE</h5>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Money}
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

export default About;
