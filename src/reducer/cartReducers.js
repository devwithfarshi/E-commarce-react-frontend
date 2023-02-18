const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;

      // tackle the existing product
      let existingProduct = state.cart.find((value) => value.id === id + color);

      if (existingProduct) {
        let updateProduct = state.cart.map((value) => {
          if (value.id === id + color) {
            let newAmount = value.amount + amount;
            if (newAmount >= value.max) {
              newAmount = value.max;
            }
            return {
              ...value,
              amount: newAmount,
            };
          } else {
            return {
              ...value,
            };
          }
        });

        return {
          ...state,
          cart: updateProduct,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    case "REMOVE_CART_ITEM":
      let updateCart = state.cart.filter((value) => {
        return value.id !== action.id;
      });

      return {
        ...state,
        cart: updateCart,
      };
    case "SET_DECREASE":
      let updateProduct = state.cart.map((value) => {
        if (value.id === action.id) {
          let decAmount = value.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...value,
            amount: decAmount,
          };
        } else {
          return value;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    case "SET_INCREASE":
      let updateInProduct = state.cart.map((value) => {
        if (value.id === action.id) {
          let inAmount = value.amount + 1;
          if (inAmount >= value.max) {
            inAmount = value.max;
          }
          return {
            ...value,
            amount: inAmount,
          };
        } else {
          return value;
        }
      });
      return {
        ...state,
        cart: updateInProduct,
      };

    case "CART_ITEM_PRICE_TOTAL":
      let { total_item, total_price } = state.cart.reduce(
        (accum, value) => {
          accum.total_item += value.amount;
          accum.total_price += value.price * value.amount;
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
export default cartReducer;
