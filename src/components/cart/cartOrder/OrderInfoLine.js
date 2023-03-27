import classes from "./OrderInfoLine.module.scss";

const OrderInfoLine = (props) => {
  return (
    <div className={classes["order-info-line_wrapper"]}>
      <span>{props.title + ":"}</span>
      <div className={classes["order-info-line_dashed-line"]} />
      <span>{props.totalCost}</span>
    </div>
  );
};

export default OrderInfoLine;
