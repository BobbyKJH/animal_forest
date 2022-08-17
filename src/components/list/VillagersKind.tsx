// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Componenets
import Card from "../common/Card";
// Style
import { CardStyle } from "../../style/common/CardStyle";
import { SequenceBtn } from "../../style/common/ButtonStyle";
// Api
import instance from "../../api/instance";
// Type
import { Map } from "../../type/commonType";

interface FilterCard {
  kind: string;
  select: any;
}

const VillagersKind = ({ kind, select }: FilterCard) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);

  const getList = async () => {
    try {
      const res = await instance.get("villagers.json");
      setList(res.data);
    } catch (err) {
      alert("DB를 가져오는데 실패하였습니다.");
      console.error("에러: " + err);
    }
  };

  useEffect(() => {
    getList();
  }, [page]);

  // 동물 종류 변경시 page 처음으로 돌려준다.
  useEffect(() => {
    setPage(0);
  }, [select]);

  // 동물 종류 filter
  const Kind = list.filter((res: { species: string }) =>
    res.species.includes(kind)
  );

  const increase = () => {
    if (page >= Kind.length - 9) {
      return;
    }
    return setPage((prev) => prev + 9);
  };

  const decrease = () => {
    if (page === 0) {
      return;
    }
    setPage((prev) => prev - 9);
  };

  return (
    <>
      {Kind.slice(page, page + 9).map((item: Map) => (
        <CardStyle key={item.id}>
          <Link to={`/villagers/${item.id}`}>
            <Card image={item.icon_uri} title={item.name_KRko} />
          </Link>
        </CardStyle>
      ))}

      <SequenceBtn>
        <button className="btn" onClick={decrease}>
          이전
        </button>
        <div className="list-number">
          {page + 1} - {Kind.length}
        </div>
        <button className="btn" onClick={increase}>
          다음
        </button>
      </SequenceBtn>
    </>
  );
};

export default VillagersKind;
