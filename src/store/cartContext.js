import React from "react";

const cartContext = React.createContext({
  items: [],
  totalCost: 0,
  cartState: "",
  addItem: () => {},
  removeItem: () => {},
  applyOrder: () => {},
});

export default cartContext;
