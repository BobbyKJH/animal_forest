// Components
import { useState, useCallback } from "react";
import CardList from "../../components/list/CardList";
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const FishListPage = () => {
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState("");

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearch(value);
    },
    [search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      setBtn(search);
    },
    [search]
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
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      {btn === "" ? (
        <CardList thing="fish" />
      ) : (
        <SearchList thing="fish" search={btn} />
      )}
    </ListStyle>
  );
};

export default FishListPage;
