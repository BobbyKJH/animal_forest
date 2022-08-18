import { BugLocation, PriceCommas, Time } from "../../Utils";

interface BugType {
  image: string;
  name: string;
  location: string;
  time: string;
  price: number;
  phrase: string;
  museum: string;
}

const Bug = ({
  image,
  name,
  phrase,
  museum,
  location,
  time,
  price,
}: BugType) => {
  return (
    <>
      <img src={image} className="image" />
      <div className="intro">
        <span className="name">{name}</span>
        <p className="phrase">{phrase}</p>
        <p className="phrase">{museum}</p>

        <div className="chart">
          <div className="chart-nav">
            <p className="nav">출현 장소</p>
            <p className="nav">출현 시간</p>
            <p className="nav">가격</p>
          </div>
          <div className="chart-nav">
            <p className="location nav">{BugLocation(location)}</p>
            <p className="time nav">{Time(time)}</p>
            <p className="price nav">{PriceCommas(price)} 벨</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bug;
