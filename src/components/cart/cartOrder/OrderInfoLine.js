import classes from "./OrderInfoLine.module.scss";

const OrderInfoLine = (props) => {
  return (
    <div
      style={{
      }}
    >
      <span>Итого:</span>
      <div
        style={{
          maxWidth: "100%",
          width: "100%",
          boxSizing: "border-box",
          margin: "0 0.3vw",
          borderBottom: "2px dashed black",
        }}
      />
      <span>21 498 руб.</span>
    </div>
  );
};
