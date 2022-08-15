// Compoenets
import MusicCardList from "../../components/list/MusicCardList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const BackgroundMusicListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">배경 음악</h2>

      <MusicCardList thing="backgroundmusic" />
    </ListStyle>
  );
};

export default BackgroundMusicListPage;
