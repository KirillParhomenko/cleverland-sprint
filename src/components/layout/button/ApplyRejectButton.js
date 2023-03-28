import ButtonArrow from "../../../assets/buttonArrow";

import classes from "./ApplyRejectButton.module.scss";

const ApplyRejectButton = (props) => {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
  };

  const clickHandler = () => {
    props.onClick();
  };

  return (
    <button
      type={props.type}
      style={buttonStyle}
      className={classes[props.isApply ? "button_apply" : "button_reject"]}
      onClick={clickHandler}
    >
      <ButtonArrow width={props.fontSize} height={props.fontSize} />
      {props.text}
    </button>
  );
};

export default ApplyRejectButton;
