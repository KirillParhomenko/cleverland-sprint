import { Fragment } from "react";
import ReactDOM from "react-dom";

const PopUp = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

const BackDrop = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        opacity: "0.5",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
        cursor: "pointer",
      }}
      onClick={props.onHide}
    ></div>
  );
};

const PopUpPortal = (props) => {
  return (
    <Fragment>
      {props.isActive &&
        ReactDOM.createPortal(
          <BackDrop onHide={props.hideHandler}></BackDrop>,
          document.getElementById("pop-up")
        )}
      {props.isActive &&
        ReactDOM.createPortal(
          <PopUp>{props.children}</PopUp>,
          document.getElementById("pop-up")
        )}
    </Fragment>
  );
};

export default PopUpPortal;
