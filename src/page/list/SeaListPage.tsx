// React
import { useCallback } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// Components
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";
import {
  seaList,
  seaPage,
  seaSearch,
  seaType,
} from "../../store/search/seaSlice";

const SeaListPage = () => {
  const seaValue = useAppSelector(seaType);
  const searchCard = useAppDispatch();

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      searchCard(seaSearch(value));
    },
    [seaValue.search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchCard(seaList(seaValue.search));
      searchCard(seaPage(0));
    },
    [seaValue.search]
  );

  return (
    <ListStyle>
      <h2 className="list-title">해산물 도감</h2>

      <form onSubmit={SearchBtn} className="search">
        <input
          type="text"
          onChange={Search}
          className="search-input"
          placeholder="해산물 이름을 입력해주세요."
          value={seaValue.search}
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      <SearchList
        thing="sea"
        search={seaValue.sea}
        page={seaValue.page}
        next={seaPage(9)}
        previous={seaPage(-9)}
      />
    </ListStyle>
  );
};

export default SeaListPage;
