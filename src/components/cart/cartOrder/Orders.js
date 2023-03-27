import { useContext } from "react";

import SneakerCart from "../../sneakers/sneaker/SneakerCart";
import cartContext from "../../../store/cartContext";

import classes from "./Orders.module.scss";

const Orders = (props) => {
  const orders = useContext(cartContext);

  return (
    <div className={classes["cart-items_wrapper"]}>
      {orders.items.map((item, index) => {
        return (
          <SneakerCart
            key={index}
            id={item.id}
            idInCart={item.idInCart}
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

export default Orders;
