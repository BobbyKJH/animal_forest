// Components
import CardList from "../../components/list/CardList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const FossilListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">화석 도감</h2>

      <CardList thing="fossils" />
    </ListStyle>
  );
};

export default FossilListPage;
