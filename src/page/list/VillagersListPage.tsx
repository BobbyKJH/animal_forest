// React
import { useCallback, useMemo, useState } from "react";
import VillagersKind from "../../components/list/VillagersKind";
// Style
import { ListStyle } from "../../style/list/ListStyle";
// Select List
import { Kind } from "../../api/VillagerKind";

const VillagersListPage = () => {
  const [villager, setVillager] = useState("");

  const Select = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setVillager(value);
    },
    [villager]
  );

  return (
    <ListStyle>
      <h2 className="list-title">마을 주민</h2>
      {/* 동물 종류 */}
      <select onChange={Select} value={villager}>
        {Kind.map((kind: { value: string; name: string }) => (
          <option key={kind.value} value={kind.value}>
            {kind.name}
          </option>
        ))}
      </select>

      <VillagersKind kind={villager} select={Select} />
    </ListStyle>
  );
};

export default VillagersListPage;
