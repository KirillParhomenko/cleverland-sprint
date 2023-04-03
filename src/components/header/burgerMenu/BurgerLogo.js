import classes from "./BurgerLogo.module.scss";

const BurgerLogo = (props) => {
  const className = `${classes["hamburger_line"]} ${
    props.isBurgerMenuActive && classes["hamburger_active"]
  }`;
  return (
    <div
      className={classes["hamburger_wrapper"]}
      onClick={props.burgerMenuToggle}
    >
      <span className={className}></span>
      <span className={className}></span>
      <span className={className}></span>
    </div>
  );
};

export default BurgerLogo;
