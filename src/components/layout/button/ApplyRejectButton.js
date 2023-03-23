import ButtonArrow from "../../../assets/buttonArrow";

import classes from "./ApplyRejectButton.module.scss";

const ApplyRejectButton = (props) => {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
  };

  return (
    <button
      style={buttonStyle}
      className={classes[props.isApply ? "button_apply" : "button_reject"]}
    >
      <ButtonArrow />
      {props.text}
    </button>
  );
};

export default ApplyRejectButton;
