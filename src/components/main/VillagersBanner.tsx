// React
import { useEffect, useState } from "react";
// Componenet
import BannerList from "./BannerList";
// Style
import { BannerStyle } from "../../style/main/BannerStyle";

const VillagersBanner = () => {
  const [scroll, setScrollY] = useState(0);
  const [banner, setBanner] = useState(0);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scroll > 120 && scroll < 1000) {
      setBanner(1);
    } else {
      setBanner(0);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  }, [scroll]);

  return (
    <BannerStyle show={banner}>
      <span className="banner-title">마을 주민</span>

      <div className="banner-card">
        <BannerList thing="villagers" />
      </div>
    </BannerStyle>
  );
};
export default VillagersBanner;
