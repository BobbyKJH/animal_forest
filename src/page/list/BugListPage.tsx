// React
import { useCallback } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  bugList,
  bugPage,
  bugSearch,
  bugType,
} from "../../store/search/bugSlice";
// Components
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const BugListPage = () => {
  const bugValue = useAppSelector(bugType);
  const searchCard = useAppDispatch();

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      searchCard(bugSearch(value));
    },
    [bugValue.search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchCard(bugList(bugValue.search));
      searchCard(bugPage(0));
    },
    [bugValue.search]
  );

  return (
    <ListStyle>
      <h2 className="list-title">곤충 도감</h2>

      <form onSubmit={SearchBtn} className="search">
        <input
          type="text"
          onChange={Search}
          className="search-input"
          placeholder="곤충 이름을 입력해주세요."
          value={bugValue.search}
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      <SearchList
        thing="bugs"
        search={bugValue.bug}
        page={bugValue.page}
        next={bugPage(9)}
        previous={bugPage(-9)}
      />
    </ListStyle>
  );
};

export default BugListPage;
