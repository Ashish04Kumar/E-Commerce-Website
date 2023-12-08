const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(
    //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //   product
    // );

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    console.log("This is the existing product in our cart", existingProduct);

    if (existingProduct) {
      console.log(existingProduct);
      let updatedProduct = state.cart.map((curItem) => {
        if (curItem.id === id + color) {
          let newAmount = curItem.amount + amount;

          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }

          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem; // return unchanged item for other cases
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      console.log(state.cart);
      let cartProduct = {
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
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  //o set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount + 1;

        if (decAmount >= curElem.max) {
          decAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      return initialVal + amount; // Add the return statement here
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { amount, price } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal; // Add the return statement here
    }, 0);
    return {
      ...state,
      total_price: total_price,
    };
  }

  return state;
};

export default cartReducer;