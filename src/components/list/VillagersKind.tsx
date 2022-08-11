// React
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Componenets
import Card from "../common/Card";
// Api
import { Villagers } from "../../api/ListApi";
// Type
import { Map } from "../../type/commonType";
import { CardStyle } from "../../style/common/CardStyle";

interface FilterCard {
  kind: string;
}

const VillagersKind = ({ kind }: FilterCard) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const res = await axios.get(Villagers);
      setList(res.data);
      console.log(res.data);
    } catch (err) {
      alert("DB를 가져오는데 실패하였습니다.");
      console.error("에러: " + err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const Kind = list.filter((res: { species: string }) =>
    res.species.includes(kind)
  );

  return (
    <>
      {Kind.map((item: Map) => (
        <CardStyle key={item.id}>
          <Link to={`/villager/${item.id}`}>
            <Card icon={item.icon_uri} title={item.name_KRko} />
          </Link>
        </CardStyle>
      ))}
      {Kind.length}
    </>
  );
};

export default VillagersKind;
