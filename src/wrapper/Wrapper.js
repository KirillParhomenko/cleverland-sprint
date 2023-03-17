import classes from "./Wrapper.module.scss";

const Wrapper = (props) => {
  return <div className={classes["wrapper-content"]}>{props.children}</div>;
};

export default Wrapper;
