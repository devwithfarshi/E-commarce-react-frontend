import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Button } from "../styles/Button";
import CartAmountToggle from "./CartAmountToggle";
const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const { addToCart } = useCartContext();
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((value, index) => {
            return (
              <>
                <button
                  key={index}
                  style={{
                    background: value,
                  }}
                  className={
                    color === value ? "btnStyle active checkStyle" : "btnStyle"
                  }
                  onClick={() => {
                    setColor(value);
                  }}
                >
                  {color === value ? <FaCheck /> : null}
                </button>
              </>
            );
          })}
        </p>
      </div>

      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink
        to="/cart"
        onClick={() => {
          addToCart(id, color, amount, product);
        }}
      >
        <Button className="btn" size="larger" variant="contained">
          Add To Cart
        </Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    display: grid;
    place-items: center;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
