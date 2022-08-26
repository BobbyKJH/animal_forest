// React
import { useCallback } from "react";
//Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  artList,
  artPage,
  artSearch,
  artType,
} from "../../store/search/artSlice";
// Components
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const ArtListPage = () => {
  const artValue = useAppSelector(artType);
  const searchCard = useAppDispatch();

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      searchCard(artSearch(value));
    },
    [artValue.search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchCard(artList(artValue.search));
      searchCard(artPage(0));
    },
    [artValue.search]
  );

  return (
    <ListStyle>
      <h2 className="list-title">미술품</h2>

      <form onSubmit={SearchBtn} className="search">
        <input
          type="text"
          onChange={Search}
          className="search-input"
          placeholder="예술 작품을 입력해주세요."
          value={artValue.search}
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      <SearchList
        thing="art"
        search={artValue.art}
        page={artValue.page}
        next={artPage(9)}
        previous={artPage(-9)}
      />
    </ListStyle>
  );
};

export default ArtListPage;
