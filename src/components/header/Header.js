import { useContext } from "react";
import { Link } from "react-router-dom";
import { useMatchMedia } from "../../hooks";

import cartContext from "../../store/cartContext";

import countPrice from "../../assets/countPrice";

import classes from "./Header.module.scss";

import Logo from "./../../assets/logo.png";
import CartLogo from "../../assets/cart_logo";
import FavoutireLogo from "../../assets/favourite_logo";
import ProfileLogo from "../../assets/profile_logo";
import BurgerLogo from "./burgerMenu/BurgerLogo";

const Header = (props) => {
  let totalPrice = useContext(cartContext).totalCost;
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  totalPrice = countPrice(totalPrice.toString());

  return (
    <header>
      <Link to="/" className={classes["header-wrapper_logo"]}>
        <img
          src={Logo}
          alt="Logo of sneaker react!"
          className={classes["header-logo"]}
        />
        <div className={classes["header-logo_text"]}>
          <h1>REACT SNEAKERS</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </Link>
      {isMobile && (
        <BurgerLogo
          burgerMenuToggle={props.burgerMenuToggle}
          isBurgerMenuActive={props.isBurgerMenuActive}
        />
      )}
      {!isMobile && (
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
              <Link to={"/favourites"} className={classes["header-favourite"]}>
                <FavoutireLogo color={"#9B9B9B"} />
              </Link>
            </li>
            <li>
              <Link to={"/purchase"} className={classes["header-profile"]}>
                <ProfileLogo />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
