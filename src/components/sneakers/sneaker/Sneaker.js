import classes from "./Sneaker.module.scss";

import SneakerBuy from "../../../assets/sneakerBuy";

import sneakerPhoto from "./../../../assets/testSneaker.jpg";

const Sneaker = (props) => {
  return (
    <div className={classes["sneaker_wrapper"]}>
      <div className={classes["sneaker_img-wrapper"]}>
        <img src={sneakerPhoto} />
      </div>
      <div className={classes["sneaker_title"]}>
        <p>Мужские Кроссовки</p>
        <p>Nike Blazer Mid Suede</p>
      </div>
      <div className={classes["sneaker_order-wrapper"]}>
        <div className={classes["sneaker_order-price"]}>
          <p>ЦЕНА:</p>
          <p>12 999руб.</p>
        </div>
        <button>
          <SneakerBuy />
        </button>
      </div>
    </div>
  );
};

export default Sneaker;
