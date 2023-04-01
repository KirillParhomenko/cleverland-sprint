import React from "react";

const favouriteContext = React.createContext({
  items: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export default favouriteContext;
