import React from "react";

const purchasesContext = React.createContext({
  items: [],
  addPurchases: () => {},
});

export default purchasesContext;
