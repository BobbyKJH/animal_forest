// Components
import CardList from "../../components/list/CardList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const BugListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">곤충 도감</h2>

      <CardList thing="bugs" />
    </ListStyle>
  );
};

export default BugListPage;
