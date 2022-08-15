// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Components
import Card from "../common/Card";
// Style
import { CardStyle } from "../../style/common/CardStyle";
// Api
import instance from "../../api/instance";
// Type
import { Map } from "../../type/commonType";

interface SearchType {
  thing: string;
  search: string;
}

const SearchList = ({ thing, search }: SearchType) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const res = await instance.get(`${thing}.json`);
      setList(res.data);
    } catch (err) {
      alert("DB를 가져오는데 실패하였습니다.");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const ListFilter = list.filter((item: { name_KRko: string }) =>
    item.name_KRko.includes(search)
  );

  return (
    <>
      {ListFilter.map((item: Map) => (
        <CardStyle key={item.id}>
          <Link to={`/villagers/${item.id}`}>
            <Card image={item.icon_uri} title={item.name_KRko} />
          </Link>
        </CardStyle>
      ))}
    </>
  );
};

export default SearchList;
