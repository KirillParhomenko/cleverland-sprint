import ApplyRejectButton from "./../../layout/button/ApplyRejectButton";

import emptyBox from "./../../../assets/EmptyBox.png";

import classes from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={classes["cart-empty_wrapper"]}>
      <img src={emptyBox} alt="Empty box" />
      <h2>Корзина пустая</h2>
      <p>Добавьте хотя бы одну пару</p>
      <p>кроссовок, чтобы сделать заказ.</p>
      <ApplyRejectButton
        width={"90%"}
        height={"3.5vw"}
        fontSize={"1vw"}
        text={"Вернуться назад"}
        isApply={false}
      />
    </div>
  );
};

export default CartEmpty;
