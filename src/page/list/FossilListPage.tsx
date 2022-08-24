// React
import { useCallback } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fossilList,
  fossilPage,
  fossilSearch,
  fossilType,
} from "../../store/search/fossilSlice";
// Components
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const FossilListPage = () => {
  const fossilValue = useAppSelector(fossilType);
  const searchCard = useAppDispatch();

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      searchCard(fossilSearch(value));
    },
    [fossilValue.search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchCard(fossilList(fossilValue.search));
      searchCard(fossilPage(0));
    },
    [fossilValue.search]
  );

  return (
    <ListStyle>
      <h2 className="list-title">화석 도감</h2>

      <form onSubmit={SearchBtn} className="search">
        <input
          type="text"
          onChange={Search}
          className="search-input"
          placeholder="화석 이름을 입력해주세요."
          value={fossilValue.search}
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      <SearchList
        thing="fossils"
        search={fossilValue.fossil}
        page={fossilValue.page}
        next={fossilPage(9)}
        previous={fossilPage(-9)}
      />
    </ListStyle>
  );
};

export default FossilListPage;
