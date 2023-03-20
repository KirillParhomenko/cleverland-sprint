import Wrapper from "./../layout/wrappers/Wrapper";
import BannerArrow from "../../assets/banner_arrow";

import classes from "./Banner.module.scss";

import bannerData from "../../assets/bannerData";

const Banner = () => {
  return (
    <section>
      <Wrapper className={classes["banner-wrapper"]}>
        <span>
          <BannerArrow />
        </span>
        <div
          className={classes["banner-images"]}
          style={{
            backgroundImage: `url(${bannerData[0].sourceUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <span>
          <BannerArrow />
        </span>
      </Wrapper>
    </section>
  );
};

export default Banner;
