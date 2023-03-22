import PopUpPortal from "../layout/portal/PopUpPortal";
import classes from "./Cart.module.scss";

const Cart = (props) => {
  return (
    <PopUpPortal>
      <div className={classes["cart-wrapper"]}></div>;
    </PopUpPortal>
  );
};

export default Cart;
