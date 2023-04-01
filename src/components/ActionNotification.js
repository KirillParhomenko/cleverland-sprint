import ApplyRejectButton from "./layout/button/ApplyRejectButton";

import classes from "./ActionNotification.module.scss";

const ActionNotification = ({
  imgUrl,
  title,
  text,
  buttonText,
  isApply,
  onHideCart,
  wrapperStyles,
  imgStyles
}) => {
  return (
    <div style={wrapperStyles} className={classes["cart-exit_wrapper"]}>
      <img src={imgUrl} style={imgStyles}/>
      <h2>{title}</h2>
      <p>{text}</p>
      <ApplyRejectButton
        type={"button"}
        width={"90%"}
        height={"3.5vw"}
        fontSize={"1vw"}
        text={buttonText}
        isApply={isApply}
        onClick={onHideCart}
      />
    </div>
  );
};

export default ActionNotification;
