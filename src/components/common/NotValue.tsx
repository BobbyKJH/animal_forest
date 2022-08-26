// React
import { useEffect, useState } from "react";
// Component
import Loading from "./Loading";
import Not from "../../img/NotValue.png";
import { NotValueStyle } from "../../style/common/NotValueStyle";

const NotValue = () => {
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEmpty(true);
    }, 500);
  }, [empty]);

  return (
    <NotValueStyle>
      {empty ? (
        <>
          <img src={Not} />
          <span>해당 검색어가 없습니다</span>
        </>
      ) : (
        <Loading />
      )}
    </NotValueStyle>
  );
};

export default NotValue;
