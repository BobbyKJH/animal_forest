import { BugLocation, PriceCommas, Time } from "../../Utils";

interface BugType {
  image: string;
  name: string;
  take: string;
  museum: string;
  location: string;
  time: string;
  price: number;
}

const Bug = ({ image, name, take, museum, location, time, price }: BugType) => {
  return (
    <>
      <img src={image} className="image" />

      <div className="intro">
        <span className="name">{name}</span>

        <div className="catch pick">
          <p className="phrase">감정</p>
          <p>{take}</p>
        </div>

        <div className="catch pick">
          <p className="phrase">감정</p>
          <p>{museum}</p>
        </div>

        <div className="chart">
          <div className="chart-nav">
            <p className="nav">출현장소</p>
            <p className="nav">출현시간</p>
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
