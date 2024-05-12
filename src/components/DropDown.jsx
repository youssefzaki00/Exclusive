import arrowDown from "../assets/Icons/DropDown.svg";
import { useState } from "react";
function DropDown() {
  const [isDrop, setIsDrop] = useState(false);
  const [defaultLanguage, setDefaultLanguage] = useState("english");
  const languages = ["arabic", "english", "german"];
  return (
    <div>
      <button
        className="flex items-center gap-3 capitalize fill-primary1"
        onClick={() => {
          setIsDrop(!isDrop);
        }}
      >
        {defaultLanguage}
        <img src={arrowDown} alt="arrowDown" className="invert" />
      </button>
      <div className={`${!isDrop && "hidden"} relative `}>
        <ul
          className="p-2 mt-4 absolute flex flex-col gap-2 
          bg-[#000000]  z-10 rounded backdrop-filter 
          backdrop-blur-4xl text-primary1 bg-opacity-40"
        >
          {languages.map((language) => (
            <li
              className={`p-2 rounded text-center hover:bg-buttonHover1 ${
                language == defaultLanguage ? "bg-button1" : "bg-button2"
              }`}
              key={language}
            >
              <button
                className="capitalize "
                onClick={() => {
                  setDefaultLanguage(language);
                  setIsDrop(false);
                }}
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DropDown;
