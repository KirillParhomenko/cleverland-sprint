import { useContext } from "react";

import cartContext from "../../store/cartContext";

import countPrice from "../../assets/countPrice";

import classes from "./Header.module.scss";

import Logo from "./../../assets/logo.png";
import CartLogo from "../../assets/cart_logo";
import FavoutireLogo from "../../assets/favourite_logo";
import ProfileLogo from "../../assets/profile_logo";

const Header = (props) => {
  let totalPrice = useContext(cartContext).totalCost;

  totalPrice = countPrice(totalPrice.toString());

  return (
    <header>
      <div className={classes["header-wrapper_logo"]}>
        <img
          src={Logo}
          alt="Logo of sneaker react!"
          className={classes["header-logo"]}
        />
        <div className={classes["header-logo_text"]}>
          <h1>REACT SNEAKERS</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <nav>
        <ul className={classes["header-wrapper_nav"]}>
          <li>
            <button
              className={classes["header-cart"]}
              onClick={props.onShowCart}
            >
              <CartLogo />
              <span className={classes["header-cart_total-price"]}>
                {totalPrice}
              </span>
            </button>
          </li>
          <li>
            <a className={classes["header-favourite"]} href="#">
              <FavoutireLogo color={"#9B9B9B"} />
            </a>
          </li>
          <li>
            <a className={classes["header-profile"]} href="#">
              <ProfileLogo />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
