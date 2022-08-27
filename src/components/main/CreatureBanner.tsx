// React
import { useState } from "react";
// Componenets
import BannerList from "./BannerList";
// Style
import { BannerStyle } from "../../style/main/BannerStyle";

const CreatureBanner = () => {
  const [btn, setBtn] = useState<string>("fish");

  const CreatureValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setBtn(id);
  };

  return (
    <BannerStyle>
      <span className="banner-title">생물</span>

      <div className="group-btn">
        <button onClick={CreatureValue} id="fish" className="btn">
          물고기
        </button>
        <button onClick={CreatureValue} id="bugs" className="btn">
          곤충
        </button>
        <button onClick={CreatureValue} id="sea" className="btn">
          해산물
        </button>
      </div>

      <BannerList thing={btn} />
    </BannerStyle>
  );
};

export default CreatureBanner;
