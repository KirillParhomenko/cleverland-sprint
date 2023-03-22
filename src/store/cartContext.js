import React from "react";

const cartContext = React.createContext({
  items: [],
  totalCost: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default cartContext;
