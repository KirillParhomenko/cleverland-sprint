import { useState } from "react";

import favouriteContext from "./favouriteContext";

import sneakerData from "../assets/sneakerData";

const FavouriteProvider = (props) => {
  const [favouriteSneakers, setFavouriteSneakers] = useState([]);

  const addFavouriteSneakerHandler = (id) => {
    setFavouriteSneakers((prevState) => [
      ...prevState,
      sneakerData.find((sneaker) => sneaker.id === id),
    ]);
  };

  const removeFavouriteSneakerHandler = (id) => {
    setFavouriteSneakers((prevState) =>
      prevState.filter((sneaker) => sneaker.id !== id)
    );
  };

  const favouriteContextValue = {
    items: [...favouriteSneakers],
    addFavourite: addFavouriteSneakerHandler,
    removeFavourite: removeFavouriteSneakerHandler,
  };

  return (
    <favouriteContext.Provider value={favouriteContextValue}>
      {props.children}
    </favouriteContext.Provider>
  );
};

export default FavouriteProvider;
