import { useReducer } from "react";

import cartContext from "./cartContext";

const defaultSneakerData = {
  items: [],
  totalCost: 0,
  cartState: "EMPTY_ORDER",
};

const sneakerReducer = (state, action) => {
  const updatedState = { ...state };

  switch (action.type) {
    
    case "ADD_SNEAKER": {
      updatedState.totalCost = updatedState.totalCost + action.item.price;
      updatedState.items = updatedState.items.concat(action.item);
      updatedState.cartState = "AVAILABLE_ORDER";

      return updatedState;
    }

    case "REMOVE_SNEAKER": {
      updatedState.items = updatedState.items.filter(
        (item) => item.idInCart !== action.id
      );
      updatedState.totalCost = updatedState.items.reduce(
        (sum, item) => sum + item.price,
        0
      );
      updatedState.cartState =
        updatedState.items.length === 0 ? "EMPTY_ORDER" : "AVAILABLE_ORDER";

      return updatedState;
    }

    case "APPLY_ORDER_SNEAKER": {
      const defaultSneaker = { ...defaultSneakerData };
      defaultSneaker.cartState = "APPLIED_ORDER";
      return defaultSneaker;
    }

    default:
      return defaultSneakerData;
  }
};

const CartProvider = (props) => {
  const [sneakerCart, dispatcher] = useReducer(
    sneakerReducer,
    defaultSneakerData
  );

  const addSneakerHandler = (sneaker) => {
    dispatcher({ type: "ADD_SNEAKER", item: sneaker });
  };

  const removeSneakerHandler = (id) => {
    dispatcher({ type: "REMOVE_SNEAKER", id: id });
  };

  const applySneakerOrderHandler = () => {
    dispatcher({ type: "APPLY_ORDER_SNEAKER" });
  };

  const contextValue = {
    items: [...sneakerCart.items],
    totalCost: sneakerCart.totalCost,
    cartState: sneakerCart.cartState,
    addItem: addSneakerHandler,
    removeItem: removeSneakerHandler,
    applyOrder: applySneakerOrderHandler,
  };

  return (
    <cartContext.Provider value={contextValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
