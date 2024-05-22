import Mastercard from "../assets/Icons/Mastercard.svg";
import visa from "../assets/Icons/Visa.svg";
import Bkash from "../assets/Icons/Bkash.svg";
import RoadMap from "../components/RoadMap";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import useUserData from "./../hooks/useUserData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
function CheckOut() {
  const { cart, removeFromCart } = useContext(CartContext);
  const { user } = useUserData();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cart?.map((product) => ({ [product?.id]: 1 }))
  );
  const [total, setTotal] = useState(0);
  const [errors, setErrors] = useState({}); // State to store validation errors
  const requiredFields = ["first_name", "address", "City", "Phone", "email"];

  function handleQuantitiesChange(productID, e) {
    setQuantities({
      ...quantities,
      [productID]: parseFloat(e.target.value),
    });
    calculateTotal();
  }

  const calculateSubtotal = (product, quantities) => {
    return parseFloat(product.price) * parseFloat(quantities);
  };

  const calculateTotal = () => {
    let newTotal = 0;
    for (const product of cart) {
      newTotal += parseFloat(
        calculateSubtotal(product, quantities[product.id] || 1)
      );
    }
    setTotal(newTotal.toFixed(2));
  };

  useEffect(() => {
    calculateTotal();
  }, [quantities]);
  const validateForm = () => {
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!document.getElementById(field).value) {
        newErrors[field] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      cart?.map((product) => removeFromCart(product.id));
      navigate("/");
      toast.success("Order submitted successfully!");
    } else {
      toast.error("Please fill all fields.");
    }
  };
  return (
    <div className="CustomContainer capitalize mb-[140px]">
      <RoadMap />
      <h2 className="mb-12 text-4xl font-medium ">Billing Details</h2>
      <div className="grid grid-cols-2 gap-40">
        <div className="flex flex-col gap-8">
          {requiredFields.map((field) => (
            <div className="flex flex-col gap-2" key={field}>
              <label htmlFor={field} className="text-[#999999]">
                {field.replace(/([A-Z])/g, " $1").trim()}
                <span className="text-secondary3"> *</span>
              </label>
              <input
                type="text"
                id={field}
                name={field}
                className="p-2 rounded bg-secondary1"
                defaultValue={user?.[field]}
                // Add error message if present
                {...(errors[field] && { className: "border border-red-500" })}
              />
              {errors[field] && (
                <span className="text-sm text-red-500">{errors[field]}</span>
              )}
            </div>
          ))}

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
          {cart?.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center -ml-1.5 gap-6">
                <img
                  loading="lazy"
                  srcSet={product.image}
                  alt={product.name}
                  className="object-contain w-12 h-12"
                />
                <p>{product.name}</p>
              </div>
              <p>${product.price}</p>
            </div>
          ))}
          <div className="flex justify-between items-center pb-4 border-b border-[#999999]">
            <p>subtotal:</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-[#999999]">
            <p>shipping:</p>
            <p>free</p>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-[#999999]">
            <p>total:</p>
            <p>${total}</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative flex gap-4">
              <input
                type="radio"
                name="BankOrCash"
                id="bank"
                value="bank"
                checked
              />
              <label htmlFor="bank">bank</label>
              <div className="absolute right-0 flex items-center gap-2">
                <img loading="lazy" srcSet={visa} alt="visa" />
                <img loading="lazy" srcSet={Mastercard} alt="Mastercard" />
                <img loading="lazy" srcSet={Bkash} alt="Nagad" />
              </div>
            </div>
            <div className="flex gap-4">
              <input type="radio" name="BankOrCash" id="cash" value="cash" />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
            <div className="grid items-start grid-cols-5 gap-4 h-fit">
              <input
                type="text"
                className="h-full col-span-3 p-4 border border-black rounded"
                placeholder="Coupon Code"
              />
              <button
                type="button"
                className="h-full col-span-2 p-4 font-medium text-center rounded shadow bg-button2 hover:bg-buttonHover1 active:shadow-inner text-text1"
              >
                Apply Coupon
              </button>
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="w-1/2 h-full col-span-2 px-12 py-4 font-medium text-center capitalize rounded shadow bg-button2 hover:bg-buttonHover1 active:shadow-inner text-text1"
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
