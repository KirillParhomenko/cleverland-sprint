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
        let isInCart = sneakersInCart.some(
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
          />
        );
      })}
    </div>
  );
};

export default Sneakers;
