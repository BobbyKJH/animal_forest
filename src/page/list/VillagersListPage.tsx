// React
import { useCallback, useEffect, useState } from "react";
import VillagersKind from "../../components/list/VillagersKind";
// Componenets
import SearchList from "../../components/list/SearchList";
// Style
import { ListStyle } from "../../style/list/ListStyle";
// Select List
import { Kind } from "../../api/VillagerKind";

const VillagersListPage = () => {
  const [villager, setVillager] = useState("");
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState("");

  const Select = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setVillager(value);
    },
    [villager]
  );

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

  useEffect(() => {
    setBtn("");
  }, [Select]);

  return (
    <ListStyle>
      <h2 className="list-title">마을 주민</h2>
      {/* 동물 종류 */}
      <div className="input-select">
        <select onChange={Select} value={villager}>
          {Kind.map((kind: { value: string; name: string }) => (
            <option key={kind.value} value={kind.value}>
              {kind.name}
            </option>
          ))}
        </select>

        {/* 검색 */}
        <form className="search" onSubmit={SearchBtn}>
          <input
            type="text"
            onChange={Search}
            className="search-input"
            placeholder="이름을 입력해 주세요."
          />
          <button type="submit" className="search-btn">
            검색
          </button>
        </form>
      </div>

      {btn === "" ? (
        <VillagersKind kind={villager} select={Select} />
      ) : (
        <SearchList thing="villagers" search={btn} />
      )}
    </ListStyle>
  );
};

export default VillagersListPage;
