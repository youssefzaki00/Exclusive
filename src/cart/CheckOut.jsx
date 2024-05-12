import Mastercard from "../assets/Icons/Mastercard.svg";
import visa from "../assets/Icons/Visa.svg";
import Bkash from "../assets/Icons/Bkash.svg";
import Nagad from "../assets/Icons/Nagad.svg";
import RoadMap from "../components/RoadMap";
function CheckOut({ products }) {
  return (
    <div className="CustomContainer capitalize mb-[140px]">
      <RoadMap />
      <h2 className=" text-4xl font-medium mb-12 ">Billing Details</h2>
      <div className="grid grid-cols-2 gap-40">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-[#999999]">
              first Name <span className="text-secondary3"> *</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-secondary1 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[#999999]">
              street address <span className="text-secondary3"> *</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="bg-secondary1 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Apartment" className="text-[#999999]">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              id="Apartment"
              name="Apartment"
              className="bg-secondary1 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="City" className="text-[#999999]">
              Town/City <span className="text-secondary3"> *</span>
            </label>
            <input
              type="text"
              id="City"
              name="City"
              className="bg-secondary1 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Phone" className="text-[#999999]">
              Phone Number <span className="text-secondary3"> *</span>
            </label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              className="bg-secondary1 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email" className="text-[#999999]">
              Email Address <span className="text-secondary3"> *</span>
            </label>
            <input
              type="text"
              id="Email"
              name="Email"
              className="bg-secondary1 p-2 rounded"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="Save"
              name="Save"
              className="active:bg-secondary3 styled-checkbox"
            />
            <label htmlFor="Save" className="text-sm normal-case">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center -ml-1.5 gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-contain"
                />
                <p>{product.name}</p>
              </div>
              <p>${product.price}</p>
            </div>
          ))}
          <div className="flex justify-between items-center pb-4 border-b border-[#999999]">
            <p>subtotal:</p>
            <p>$1231</p>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-[#999999]">
            <p>shipping:</p>
            <p>free</p>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-[#999999]">
            <p>total:</p>
            <p>$1231</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 relative">
              <input type="radio" name="BankOrCash" id="bank" value="bank" />
              <label htmlFor="bank">bank</label>
              <div className="flex items-center absolute right-0 gap-2">
                <img src={visa} alt="visa" />
                <img src={Mastercard} alt="Mastercard" />
                <img src={Bkash} alt="Nagad" />
                <img src={Nagad} alt="Nagad" />
              </div>
            </div>
            <div className="flex gap-4">
              <input type="radio" name="BankOrCash" id="cash" value="cash" />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
            <div className="grid grid-cols-5 h-fit items-start gap-4">
              <input
                type="text"
                className="border-black border h-full rounded p-4 col-span-3"
                placeholder="Coupon Code"
              />
              <button
                type="button"
                className="bg-button2 hover:bg-buttonHover1 shadow active:shadow-inner text-center h-full p-4 rounded font-medium text-text1 col-span-2"
              >
                Apply Coupon
              </button>
            </div>
            <button
              type="button"
              className="bg-button2 hover:bg-buttonHover1 shadow active:shadow-inner text-center h-full rounded font-medium text-text1 col-span-2 px-12 py-4 w-1/2 capitalize"
            >
              place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
