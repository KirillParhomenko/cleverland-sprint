import { useReducer } from "react";

import cartContext from "./cartContext";

const defaultSneakerData = { items: [], totalCost: 0 };

const sneakerReducer = (state, action) => {
  if (action.type === "ADD_SNEAKER") {
    const updatedState = { ...state };
    updatedState.totalCost = updatedState.totalCost + action.item.price;
    updatedState.items = updatedState.items.concat(action.item);

    return updatedState;
  }

  if (action.type === "REMOVE_SNEAKER") {
    const updatedState = { ...state };
    updatedState.items = updatedState.items.filter(
      (item) => item.idInCart !== action.id
    );
    updatedState.totalCost = updatedState.items.reduce(
      (sum, item) => sum + item.price,
      0
    );

    console.log(updatedState);
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

  const removeSneakerHandler = (id) => {
    dispatcher({ type: "REMOVE_SNEAKER", id: id });
  };

  const contextValue = {
    items: [...sneakerCart.items],
    totalCost: sneakerCart.totalCost,
    addItem: addSneakerHandler,
    removeItem: removeSneakerHandler,
  };
  console.log(contextValue);
  return (
    <cartContext.Provider value={contextValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
