// React
import { useCallback } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  villagerList,
  villagerPage,
  villagerSearch,
  villagerSelect,
  villagerType,
} from "../../store/search/villagerSlice";
// Componenets
import SearchList from "../../components/list/SearchList";
import VillagersKind from "../../components/list/VillagersKind";
// Style
import { ListStyle } from "../../style/list/ListStyle";
// Select List
import { Kind } from "../../api/VillagerKind";

const VillagersListPage = () => {
  const villagerValue = useAppSelector(villagerType);
  const searchCard = useAppDispatch();

  const Select = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      searchCard(villagerSelect(value));
      searchCard(villagerList(""));
      searchCard(villagerSearch(""));
      searchCard(villagerPage(0));
    },
    [villagerValue.select]
  );

  const Search = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      searchCard(villagerSearch(value));
    },
    [villagerValue.search]
  );

  const SearchBtn = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchCard(villagerList(villagerValue.search));
      searchCard(villagerPage(0));
    },
    [villagerValue.search]
  );

  return (
    <ListStyle>
      <h2 className="list-title">마을 주민</h2>

      {/* 동물 종류 */}
      <div className="input-select">
        <select onChange={Select} value={villagerValue.select}>
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
            value={villagerValue.search}
          />
          <button type="submit" className="search-btn">
            검색
          </button>
        </form>
      </div>

      {villagerValue.villager === "" ? (
        <VillagersKind kind={villagerValue.select} />
      ) : (
        <SearchList
          thing="villagers"
          search={villagerValue.villager}
          page={villagerValue.page}
          next={villagerPage(9)}
          previous={villagerPage(-9)}
        />
      )}
    </ListStyle>
  );
};

export default VillagersListPage;
