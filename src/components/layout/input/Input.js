import SearchLogo from "./../../../assets/searchLogo";

import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={classes["input-wrapper"]}>
      <SearchLogo />
      <input placeholder={"Поиск..."}></input>
    </div>
  );
};

export default Input;
