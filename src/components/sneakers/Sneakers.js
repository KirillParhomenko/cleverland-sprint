import Sneaker from "./sneaker/Sneaker";
import sneakerData from "../../assets/sneakerData";

import classes from "./Sneakers.module.scss";

const Sneakers = (props) => {
  return (
    <div className={classes["sneakers_wrapper"]}>
      {sneakerData.map((item, index) => {
        return (
          <Sneaker
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            categorySex={item.categorySex}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Sneakers;
