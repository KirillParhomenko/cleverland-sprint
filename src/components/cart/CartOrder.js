import ApplyRejectButton from "../layout/button/ApplyRejectButton";

const CartOrder = (props) => {
  return (
    <div>
      <div></div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            whiteSpace:'nowrap'
          }}
        >
          <span>Итого:</span>
          <div
            style={{
              
              maxWidth: "100%",
              width: "100%",
              border: "0.5px dashed black",
            }}
          />
          <span>21 498 руб.</span>
        </div>
        <p>
          <span></span>
          <span></span>
          <span></span>
        </p>
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
