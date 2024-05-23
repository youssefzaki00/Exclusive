import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoadMap from "./../components/RoadMap";
import { CartContext } from "../context/CartContext";
import cancelIcon from "../assets/Icons/icon-cancel-1.svg";
function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    cart?.map((product) => ({ [product.id]: 1 }))
  );
  const [total, setTotal] = useState(0);

  function handleQuantitiesChange(productID, e) {
    setQuantities({
      ...quantities,
      [productID]: parseFloat(e.target.value),
    });
    calculateTotal();
  }

  const calculateSubtotal = (product, quantities) => {
    return parseFloat(product?.price) * parseFloat(quantities);
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
  return (
    <div className="capitalize CustomContainer">
      <RoadMap />
      <div className="flex flex-col gap-10">
        <ul
          className="grid grid-cols-4 place-items-center shadow-md 
      rounded w-full justify-items-center py-6 shadow-[#0000000D]"
        >
          <li>product </li>
          <li>price </li>
          <li>quantities </li>
          <li>subtotal </li>
        </ul>
        {cart?.map((product) => (
          <ul
            key={product?.id}
            className="grid grid-cols-4 place-items-center shadow-md 
      rounded w-full justify-items-center py-6 shadow-[#0000000D] text-center"
          >
            <li className="flex justify-center w-full">
              <div className="relative grid items-center w-full grid-cols-2 place-items-end">
                <button
                  className="absolute left-16 -top-4"
                  onClick={() => removeFromCart(product?.id)}
                >
                  <img
                    src={cancelIcon}
                    alt="cancel product"
                    className="object-contain "
                  />
                </button>
                <img
                  loading="lazy"
                  srcSet={product?.image}
                  alt={product?.name}
                  className="object-contain w-6 lg:w-10 "
                />
                <p className="w-full -mr-2 text-sm text-start lg:-mr-6 lg:text-base">
                  {product?.name}
                </p>
              </div>
            </li>
            <li>${product?.price}</li>
            <li>
              <input
                type="number"
                min={1}
                onChange={(e) => handleQuantitiesChange(product?.id, e)}
                value={quantities[product?.id] || 1}
                className="w-[72px] h-[44px] p-2 bg-primary1 rounded border-[1.5px] border-text3 border-opacity-40"
              />
            </li>
            <li>
              $
              {calculateSubtotal(
                product,
                quantities[product?.id] || 1
              )?.toFixed(2)}
            </li>
          </ul>
        ))}
      </div>
      <div className="grid items-center justify-between grid-cols-2 gap-4 mt-10 mb-20 text-center lg:flex">
        <Link
          to="/"
          className="py-4 border border-opacity-50 rounded shadow border-text3 active:shadow-inner hover:text-text3 hover:bg-gradient-to-l hover:from-white hover:to-buttonHover2 lg:px-12"
        >
          Return To Shop
        </Link>
        <button
          onClick={calculateTotal}
          className="py-4 border border-opacity-50 rounded shadow border-text3 active:shadow-inner hover:text-text3 hover:bg-gradient-to-r hover:from-white hover:to-buttonHover2 lg:px-12"
        >
          Update Cart
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-20 mb-[140px] items-start">
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
        <div className="flex flex-col gap-4 px-6 py-4 border border-black rounded">
          <h3 className="mb-2 text-xl font-medium ">Cart Total</h3>
          <div className="flex items-center justify-between pb-4 border-b">
            <p>Subtotal:</p>
            <p>${total}</p>
          </div>
          <div className="flex items-center justify-between pb-4 border-b">
            <p>shipping:</p>
            <p>free</p>
          </div>
          <div className="flex items-center justify-between pb-4 border-b">
            <p>total:</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-center">
            <Link
              to={`/checkout`}
              className="px-12 py-4 rounded shadow bg-button2 hover:bg-buttonHover1 active:shadow-inner text-text1 "
            >
              Process to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
