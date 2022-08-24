// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Redux
import { useAppDispatch } from "../../store/hooks";
// Components
import Card from "../common/Card";
import NotValue from "../common/NotValue";
// Style
import { CardStyle } from "../../style/common/CardStyle";
import { SequenceBtn } from "../../style/common/ButtonStyle";
// Api
import instance from "../../api/instance";
// Type
import { Map } from "../../type/commonType";

interface SearchType {
  thing: string;
  search: string;
  page: number;
  next: any;
  previous: any;
}

const SearchList = ({ thing, search, page, next, previous }: SearchType) => {
  const [list, setList] = useState([]);
  const conutPage = useAppDispatch();

  const getList = async () => {
    try {
      const res = await instance.get(`${thing}.json`);
      setList(res.data);
    } catch (err) {
      alert("DB를 가져오는데 실패하였습니다.");
    }
  };

  const ListFilter: any = list.filter((item: { name_KRko: string }) =>
    item.name_KRko.includes(search)
  );

  const Next = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (page >= ListFilter.length - 9) {
      return;
    }
    conutPage(next);
  };

  const Previous = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (page === 0) {
      return;
    }
    conutPage(previous);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {ListFilter.slice(page, page + 9).map((item: Map) => (
        <CardStyle key={item.id}>
          <Link to={`/${thing}/${item.id}`}>
            {item.icon_uri ? (
              <Card image={item.icon_uri} title={item.name_KRko} />
            ) : (
              <Card image={item.image_uri} title={item.name_KRko} />
            )}
          </Link>
        </CardStyle>
      ))}

      {/* 버튼 */}
      {ListFilter.length === 0 ? (
        <NotValue />
      ) : (
        <SequenceBtn>
          <button className="btn" onClick={Previous}>
            이전
          </button>
          <div className="list-number">
            {page + 1} ~ {ListFilter.length}
          </div>
          <button className="btn" onClick={Next}>
            다음
          </button>
        </SequenceBtn>
      )}
    </>
  );
};

export default SearchList;
