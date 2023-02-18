import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ background: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* quantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
