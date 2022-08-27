// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Componenets
import Card from "../common/Card";
// Style
import { BannerCardStyle } from "../../style/common/CardStyle";
// Api
import instance from "../../api/instance";
// Type
import { Map } from "../../type/commonType";
// Util
import { BannerCard } from "../../style/main/BannerStyle";
import { RandomSort } from "../../util/Utils";

interface BannerType {
  thing: string;
}

const BannerList = ({ thing }: BannerType) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const res = await instance.get(`${thing}.json`);
      setList(RandomSort(res.data));
    } catch (err) {
      console.error("err");
    }
  };

  useEffect(() => {
    getList();
  }, [thing]);

  return (
    <BannerCard>
      {list.slice(0, 3).map((item: Map) => (
        <Link to={`/${thing}/${item.id}`} key={item.id}>
          <BannerCardStyle>
            {item.icon_uri ? (
              <Card
                image={item.icon_uri}
                title={item.name_KRko}
                key={item.id}
              />
            ) : (
              <Card
                image={item.image_uri}
                title={item.name_KRko}
                key={item.id}
              />
            )}
          </BannerCardStyle>
        </Link>
      ))}
    </BannerCard>
  );
};

export default BannerList;
