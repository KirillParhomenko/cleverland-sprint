import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import wrapperStyle from "./../styles/Wrapper.module.scss";
import Title from "../components/layout/title/Title";
import Sneakers from "../components/sneakers/Sneakers";
import ActionNotification from "../components/ActionNotification";

import noPurchasesImage from "./../assets/noPurchases.png";

import classes from "./../App.module.scss";
import purchasesContext from "../store/purchasesContext";

const Purchases = () => {
  const purchasesCtx = useContext(purchasesContext);
  const navigate = useNavigate();
  return (
    <div className={wrapperStyle["wrapper-main"]}>
      <section className={classes["section_title-search"]}>
        <Title>Мои покупки</Title>
      </section>
      <section>
        {purchasesCtx.items.length === 0 && (
          <ActionNotification
            imgUrl={noPurchasesImage}
            title={"У вас нет заказов"}
            text={"Вы нищеброд? Оформите хотя бы один заказ."}
            buttonText={"Вернуться назад"}
            isApply={false}
            onHideCart={() => {
              navigate(-1);
            }}
            wrapperStyles={{
              width: "25%",
              paddingTop: "10vh",
            }}
            imgStyles={{ width: "5vw" }}
          />
        )}
        {purchasesCtx.items.length !== 0 && (
          <Sneakers data={purchasesCtx.items} isButtonBuyAvailable={false} />
        )}
      </section>
    </div>
  );
};

export default Purchases;
