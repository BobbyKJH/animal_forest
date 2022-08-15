// Components
import CardList from "../../components/list/CardList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const FishListPage = () => {
  return (
    <ListStyle>
      <h2 className="list-title">물고기 도감</h2>

      <CardList thing="fish" />
    </ListStyle>
  );
};

export default FishListPage;
