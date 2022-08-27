// React
import { useState } from "react";
// Component
import BannerList from "./BannerList";
// Style
import { BannerStyle } from "../../style/main/BannerStyle";

const WorkBanner = () => {
  const [btn, setBtn] = useState("art");

  const WorkValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setBtn(id);
  };
  return (
    <BannerStyle>
      <span className="banner-title">예술작품 및 화석</span>
      <div className="group-btn">
        <button className="btn" onClick={WorkValue} id="art">
          예술작품
        </button>
        <button className="btn" onClick={WorkValue} id="fossils">
          화석
        </button>
      </div>

      <BannerList thing={btn} />
    </BannerStyle>
  );
};

export default WorkBanner;
