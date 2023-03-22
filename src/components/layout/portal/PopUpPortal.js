import { Fragment } from "react";
import ReactDOM from "react-dom";

const PopUp = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

const BackDrop = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        opacity: "0.5",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-100",
      }}
    ></div>
  );
};

const PopUpPortal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop></BackDrop>,
        document.getElementById("pop-up")
      )}
      {ReactDOM.createPortal(
        <PopUp>{props.children}</PopUp>,
        document.getElementById("pop-up")
      )}
    </Fragment>
  );
};

export default PopUpPortal;
