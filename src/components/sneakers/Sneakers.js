import { useContext } from "react";

import cartContext from "../../store/cartContext";

import Sneaker from "./sneaker/Sneaker";
import sneakerData from "../../assets/sneakerData";

import classes from "./Sneakers.module.scss";

const Sneakers = (props) => {
  const sneakersInCart = useContext(cartContext).items;

  return (
    <div className={classes["sneakers_wrapper"]}>
      {sneakerData.map((item, index) => {
        const isInCart = sneakersInCart.some(
          (sneakerItem) => sneakerItem.id === item.id
        );
        const isFavourite = props.favouriteSneakers.some(
          (sneakerItem) => sneakerItem.id === item.id
        );
        return (
          <Sneaker
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            categorySex={item.categorySex}
            name={item.name}
            price={item.price}
            isInCart={isInCart}
            isFavourite={isFavourite}
            favouriteSneakers={props.favouriteSneakers}
            addFavouriteSneaker={props.addFavouriteSneakerHandler}
            removeFavouriteSneaker={props.removeFavouriteSneakerHandler}
          />
        );
      })}
    </div>
  );
};

export default Sneakers;
