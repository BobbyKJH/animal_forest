// React
import { useCallback, useState } from "react";
// Components
import CardList from "../../components/list/CardList";
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";

const ArtListPage = () => {
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
      <h2 className="list-title">예술 작품</h2>

      <form onSubmit={SearchBtn} className="search">
        <input
          type="text"
          onChange={Search}
          className="search-input"
          placeholder="예술 작품을 입력해주세요."
        />
        <button type="submit" className="search-btn">
          검색
        </button>
      </form>

      {btn === "" ? (
        <CardList thing="art" />
      ) : (
        <SearchList thing="art" search={btn} />
      )}
    </ListStyle>
  );
};

export default ArtListPage;
