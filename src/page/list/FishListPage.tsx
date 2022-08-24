// React
import { useCallback } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fishList,
  fishPage,
  fishSearch,
  fishType,
} from "../../store/search/fishSlice";
// Components
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const FishListPage = () => {
  const fishValue = useAppSelector(fishType);
  const searchCard = useAppDispatch();

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      searchCard(fishSearch(value));
    },
    [fishValue.search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchCard(fishList(fishValue.search));
      searchCard(fishPage(0));
    },
    [fishValue.search]
  );

  return (
    <ListStyle>
      <h2 className="list-title">물고기 도감</h2>

      <form onSubmit={SearchBtn} className="search">
        <input
          type="text"
          onChange={Search}
          className="search-input"
          placeholder="물고기 이름을 입력해주세요."
          value={fishValue.search}
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      <SearchList
        thing="fish"
        search={fishValue.fish}
        page={fishValue.page}
        next={fishPage(9)}
        previous={fishPage(-9)}
      />
    </ListStyle>
  );
};

export default FishListPage;
