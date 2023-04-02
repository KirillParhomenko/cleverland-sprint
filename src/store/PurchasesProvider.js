import { useState } from "react";

import purchasesContext from "./purchasesContext";

import sneakerData from "../assets/sneakerData";

const PurchasesProvider = (props) => {
  const [purchases, setPurchases] = useState([]);

  const addPurchasesHandler = (idList) => {
    setPurchases((prevState) => [
      ...prevState,
      ...idList.map((id) => sneakerData.find((sneaker) => sneaker.id === id)),
    ]);
  };

  const purchaseContextValue = {
    items: [...purchases],
    addPurchases: addPurchasesHandler,
  };
  return (
    <purchasesContext.Provider value={purchaseContextValue}>
      {props.children}
    </purchasesContext.Provider>
  );
};

export default PurchasesProvider;
