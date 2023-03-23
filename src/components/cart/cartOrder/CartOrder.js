import ApplyRejectButton from "../../layout/button/ApplyRejectButton";

const CartOrder = (props) => {
  return (
    <div>
      <div></div>
      <div>
        <ApplyRejectButton
          width={"100%"}
          height={"6rem"}
          fontSize={"2rem"}
          text={"Оформить заказ"}
          isApply={true}
        />
      </div>
    </div>
  );
};

export default CartOrder;
