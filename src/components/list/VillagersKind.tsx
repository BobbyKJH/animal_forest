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
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { villagerPage, villagerType } from "../../store/search/villagerSlice";

interface FilterCard {
  kind: string;
}

const VillagersKind = ({ kind }: FilterCard) => {
  const [list, setList] = useState([]);
  const page = useAppSelector(villagerType);
  const countPage = useAppDispatch();

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
  }, []);

  // 동물 종류 filter
  const Kind = list.filter((res: { species: string }) =>
    res.species.includes(kind)
  );

  const Next = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (page.page >= Kind.length - 9) {
      return;
    }
    countPage(villagerPage(9));
  };

  const Previous = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (page.page === 0) {
      return;
    }
    countPage(villagerPage(-9));
  };

  return (
    <>
      {Kind.slice(page.page, page.page + 9).map((item: Map) => (
        <CardStyle key={item.id}>
          <Link to={`/villagers/${item.id}`}>
            <Card image={item.icon_uri} title={item.name_KRko} />
          </Link>
        </CardStyle>
      ))}

      <SequenceBtn>
        <button className="btn" onClick={Previous}>
          이전
        </button>
        <div className="list-number">
          {page.page + 1} - {Kind.length}
        </div>
        <button className="btn" onClick={Next}>
          다음
        </button>
      </SequenceBtn>
    </>
  );
};

export default VillagersKind;
