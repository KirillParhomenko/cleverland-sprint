import { Provider, useReducer } from "react";

import cartContext from "./cartContext";

const defaultSneakerData = { items: [], totalCost: 0 };

const sneakerReducer = (state, action) => {
  if (action.type === "ADD_SNEAKER") {
    const updatedState = { ...state };
    updatedState.totalCost = updatedState.totalCost + action.item.price;
    updatedState.items = updatedState.items.concat(action.item);

    return updatedState;
  }
  return defaultSneakerData;
};

const CartProvider = (props) => {
  const [sneakerCart, dispatcher] = useReducer(
    sneakerReducer,
    defaultSneakerData
  );

  const addSneakerHandler = (sneaker) => {
    dispatcher({ type: "ADD_SNEAKER", item: sneaker });
  };

  const contextValue = {
    items: [...sneakerCart.items],
    totalCost: sneakerCart.totalCost,
    addItem: addSneakerHandler,
    removeItem: () => {},
  };

  return (
    <cartContext.Provider value={contextValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
