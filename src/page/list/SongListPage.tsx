// Components
import MusicCardList from "../../components/list/MusicCardList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const SongListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">노래</h2>
      <MusicCardList thing="songs" />
    </ListStyle>
  );
};

export default SongListPage;
