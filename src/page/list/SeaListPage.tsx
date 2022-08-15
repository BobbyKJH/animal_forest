// Components
import CardList from "../../components/list/CardList";
import { ListStyle } from "../../style/list/ListStyle";

const SeaListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">해산물 도감</h2>

      <CardList thing="sea" />
    </ListStyle>
  );
};

export default SeaListPage;
