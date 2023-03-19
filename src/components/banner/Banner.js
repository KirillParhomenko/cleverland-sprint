import Wrapper from "./../layout/wrappers/Wrapper";

import classes from "./Banner.module.scss";
import back from "./../../assets/kermit_banner.png";

const banners = [{ sourceUrl: "/../src/assets/kermit_banner.png", link: "" }];

const Banner = () => {
  return (
    <section>
      <Wrapper className={classes["banner-wrapper"]}>
        <span></span>
        <div
          style={{
            backgroundImage: `url(${banners[0].sourceUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "inherit",
            height: "inherit",
          }}
        ></div>
        <span></span>
      </Wrapper>
    </section>
  );
};

export default Banner;
