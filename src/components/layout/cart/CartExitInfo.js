import ApplyRejectButton from "../button/ApplyRejectButton";

import classes from "./CartExitInfo.module.scss";

const CartExitInfo = (props) => {
  return (
    <div className={classes["cart-exit_wrapper"]}>
      <img src={props.imgUrl} alt="Empty box" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <ApplyRejectButton
        type={"button"}
        width={"90%"}
        height={"3.5vw"}
        fontSize={"1vw"}
        text={props.buttonText}
        isApply={props.isApply}
        onClick={props.onHideCart}
      />
    </div>
  );
};

export default CartExitInfo;
