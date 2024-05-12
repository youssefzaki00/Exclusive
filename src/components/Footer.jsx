import send from "../assets/Icons/icon-send2.svg";
import Facebook from "../assets/Icons/Icon-Facebook.svg";
import Linkedin from "../assets/Icons/Icon-Linkedin.svg";
import instagram from "../assets/Icons/icon-instagram.svg";
import twitter from "../assets/Icons/icon-twitter.svg";
import QR from "../assets/footer/QR.png";
import AppStore from "../assets/footer/AppStore.png";
import GooglePlay from "../assets/footer/GooglePlay.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black ">
      <div className="w-full py-6 mx-auto lg:py-8">
        <div className="grid justify-between grid-cols-2 gap-4 capitalize lg:flex CustomContainer text-text1">
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-2xl font-bold">exclusive</h1>
            <h2 className="text-xl font-medium">Subscribe</h2>
            <ul className="text-sm font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Get 10% off your first order
                </a>
              </li>
              <li className="relative w-fit">
                <input
                  className="py-3 pl-2 lg:pl-4 bg-transparent border-[1.5px] placeholder-text2 border-white rounded max-w-32 lg:max-w-56 placeholder:text-xs"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <button className="absolute right-3 top-3">
                  <img src={send} alt="send icon" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <h2 className="mb-6 text-xl font-medium">Support</h2>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="">
                <a href="#" className="hover:underline">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="hover:underline">
                  exclusive@gmail.com
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="hover:underline">
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <h2 className="mb-6 text-xl font-medium">Account</h2>
            <ul className="flex flex-col gap-4 text-sm font-medium ">
              <li className="">
                <Link href="/account" className="hover:underline">
                  Account
                </Link>
              </li>
              <li className="text-sm">
                <Link to="/login" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li className="text-sm">
                <Link to="/cart" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li className="text-sm">
                <Link to="/wishlist" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li className="text-sm">
                <Link href="#" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <h2 className="mb-6 text-xl font-medium">Quick Link</h2>
            <ul className="flex flex-col gap-4 text-sm font-medium ">
              <li className="">
                <Link to="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="text-sm">
                <Link href="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li className="text-sm">
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="text-sm">
                <Link to="/Contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="mb-6 text-xl font-medium">Download App</h2>
            <p className="mb-2 text-xs font-medium text-text2 ">
              Save $3 with App New User Only
            </p>
            <ul className="flex gap-2.5 text-sm font-medium  ">
              <li className="mb-4">
                <img src={QR} alt="QR Code" />
              </li>
              <li className="flex flex-col gap-2">
                <Link>
                  <img src={GooglePlay} alt="GooglePlay" />
                </Link>
                <Link>
                  <img src={AppStore} alt="AppStore" />
                </Link>
              </li>
            </ul>
            <ul className="flex items-center gap-6">
              <li>
                <Link>
                  <img src={Facebook} alt="Facebook" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={twitter} alt="twitter" className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={instagram} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={Linkedin} alt="Linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-center sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-center text-gray-500 sm:text-center ">
            © Copyright Rimel 2024. All right reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
