import { useContext } from "react";

import cartContext from "../../store/cartContext";

import Sneaker from "./sneaker/Sneaker";

import classes from "./Sneakers.module.scss";

import favouriteContext from "../../store/favouriteContext";

const Sneakers = (props) => {
  const sneakersInCart = useContext(cartContext).items;
  const favouriteCtx = useContext(favouriteContext);

  return (
    <div className={classes["sneakers_wrapper"]}>
      {props.data.map((item, index) => {
        const isInCart = sneakersInCart.some(
          (sneakerItem) => sneakerItem.id === item.id
        );
        const isFavourite = favouriteCtx.items.some(
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
            favouriteSneakers={favouriteCtx.items}
            addFavouriteSneaker={favouriteCtx.addFavourite}
            removeFavouriteSneaker={favouriteCtx.removeFavourite}
            isButtonBuyAvailable={props.isButtonBuyAvailable}
          />
        );
      })}
    </div>
  );
};

export default Sneakers;
