// Componenets
import CreatureBanner from "../components/main/CreatureBanner";
import VillagersBanner from "../components/main/VillagersBanner";
import WorkBanner from "../components/main/WorkBanner";
// Style
import { MainStyle } from "../style/main/MainStyle";
// Image
import LOGO from "../img/LOGO.png";

const MainPage = () => {
  return (
    <MainStyle>
      <img src={LOGO} className="logo" />

      <VillagersBanner />

      <CreatureBanner />

      <WorkBanner />
    </MainStyle>
  );
};

export default MainPage;
