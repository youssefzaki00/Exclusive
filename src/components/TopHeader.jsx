import DropDown from "./DropDown";

function TopHeader() {
  return (
    <div
      className="CustomContainer py-4 text-xs lg:text-base bg-black 
      text-text1 flex justify-between items-center"
    >
      <div className="w-fit flex lg:justify-between items-center ">
        <div className="content flex gap-2 flex-col lg:flex-row items-start lg:items-center">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="text-xs lg:text-sm font-semibold underline capitalize"
          >
            shopNow!
          </a>
        </div>
      </div>
      <DropDown />
    </div>
  );
}

export default TopHeader;
