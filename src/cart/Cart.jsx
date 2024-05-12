import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoadMap from "./../components/RoadMap";

function Cart({ products }) {
  const cartProducts = products.slice(2, 6);
  const [quantities, setQuantities] = useState(
    cartProducts.map((product) => ({ [product.id]: 1 }))
  );
  const [total, setTotal] = useState(0); // Use state for total

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
    for (const product of cartProducts) {
      newTotal += parseFloat(
        calculateSubtotal(product, quantities[product.id] || 1)
      );
    }
    setTotal(newTotal.toFixed(2));
  };

  useEffect(() => {
    calculateTotal();
  }, [cartProducts, quantities]);
  return (
    <div className="CustomContainer capitalize">
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
        {cartProducts.map((product) => (
          <ul
            key={product.id}
            className="grid grid-cols-4 place-items-center shadow-md 
      rounded w-full justify-items-center py-6 shadow-[#0000000D] text-center"
          >
            <li className="w-full flex justify-center">
              <div className="w-full grid grid-cols-2 place-items-end items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-6 lg:w-10 object-contain "
                />
                <p className="text-start -mr-2 lg:-mr-6 text-sm lg:text-base w-full">
                  {product.name}
                </p>
              </div>
            </li>
            <li>${product.price}</li>
            <li>
              <input
                type="number"
                min={1}
                onChange={(e) => handleQuantitiesChange(product.id, e)}
                value={quantities[product.id] || 1}
                className="w-[72px] h-[44px] p-2 bg-primary1 rounded border-[1.5px] border-text3 border-opacity-40"
              />
            </li>
            <li>
              $
              {calculateSubtotal(product, quantities[product.id] || 1).toFixed(
                2
              )}
            </li>
          </ul>
        ))}
      </div>
      <div className="lg:flex justify-between grid grid-cols-2 text-center gap-4 items-center mb-20 mt-10">
        <Link
          to="/"
          className="rounded py-4  border-text3 border border-opacity-50 shadow active:shadow-inner hover:text-text3 hover:bg-gradient-to-l hover:from-white hover:to-buttonHover2 lg:px-12"
        >
          Return To Shop
        </Link>
        <button
          onClick={calculateTotal}
          className="rounded py-4  border-text3 border border-opacity-50 shadow active:shadow-inner hover:text-text3 hover:bg-gradient-to-r hover:from-white hover:to-buttonHover2 lg:px-12"
        >
          Update Cart
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-20 mb-[140px] items-start">
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
        <div className="border border-black rounded py-4 px-6 flex-col flex gap-4">
          <h3 className=" text-xl font-medium mb-2">Cart Total</h3>
          <div className="flex justify-between items-center border-b pb-4">
            <p>Subtotal:</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-between items-center border-b pb-4">
            <p>shipping:</p>
            <p>free</p>
          </div>
          <div className="flex justify-between items-center border-b pb-4">
            <p>total:</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-center">
            <Link
              to={`/checkout`}
              className="bg-button2 hover:bg-buttonHover1 shadow active:shadow-inner rounded py-4 px-12 text-text1 "
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
