// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Components
import Card from "../common/Card";
// Style
import { MusicCardStyle } from "../../style/common/CardStyle";
import { ListStyle } from "../../style/list/ListStyle";
// Api
import instance from "../../api/instance";
// Type
import { Map } from "../../type/commonType";
import { SequenceBtn } from "../../style/common/ButtonStyle";

interface CardListType {
  thing: string;
}

const MusicCardList = ({ thing }: CardListType) => {
  const [list, setList] = useState<never[]>([]);
  const [page, setPage] = useState<number>(0);

  const increase = () => {
    if (page >= list.length - 9) {
      return;
    }
    setPage((prev) => prev + 9);
  };

  const decrease = () => {
    if (page === 0) {
      return;
    }
    setPage((prev) => prev - 9);
  };

  const getList = async () => {
    try {
      const res = await instance(`${thing}.json`);
      setList(res.data);
    } catch (err) {
      alert("DB를 불러오는데 실패하였습니다");
      console.error(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <ListStyle>
      {/* 카드 */}
      {list.slice(page, page + 9).map((item: Map) => (
        <MusicCardStyle key={item.id}>
          {item.image_uri ? (
            <>
              <Card
                image={item.image_uri}
                title={item.name_KRko}
                audio={item.music_uri}
              />
              <Link to={`/${thing}/${item.id}`} className="link">
                자세히 보기
              </Link>
            </>
          ) : (
            <>
              <Card title={item.file_name} audio={item.music_uri} />
            </>
          )}
        </MusicCardStyle>
      ))}

      {/* 버튼 */}
      <SequenceBtn>
        <button className="btn" onClick={decrease}>
          이전
        </button>
        <div className="list-number">
          {page + 1} ~ {list.length}
        </div>
        <button className="btn" onClick={increase}>
          다음
        </button>
      </SequenceBtn>
    </ListStyle>
  );
};

export default MusicCardList;
