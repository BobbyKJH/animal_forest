// React
import { Routes, Route } from "react-router";
// Page
import MainPage from "./page/MainPage";
import VillagersListPage from "./page/list/VillagersListPage";
import FishListPage from "./page/list/FishListPage";
import DetailPage from "./page/detail/DetailPage";
import BugListPage from "./page/list/BugListPage";
import SeaListPage from "./page/list/SeaListPage";
import ArtListPage from "./page/list/ArtListPage";
import FossilListPage from "./page/list/FossilListPage";
import SongListPage from "./page/list/SongListPage";
import BackgroundMusicListPage from "./page/list/BackgroundMusicListPage";
// Components
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* List Page */}
        <Route path="/villagers" element={<VillagersListPage />} />
        <Route path="/fish" element={<FishListPage />} />
        <Route path="/bugs" element={<BugListPage />} />
        <Route path="/sea" element={<SeaListPage />} />
        <Route path="/art" element={<ArtListPage />} />
        <Route path="/fossil" element={<FossilListPage />} />
        <Route path="/song" element={<SongListPage />} />
        <Route path="/backgroundmusic" element={<BackgroundMusicListPage />} />

        {/* DetailPage */}
        <Route path="/:link/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default App;
