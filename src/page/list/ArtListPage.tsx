// Components
import CardList from "../../components/list/CardList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const ArtListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">예술 작품</h2>

      <CardList thing="art" />
    </ListStyle>
  );
};

export default ArtListPage;
