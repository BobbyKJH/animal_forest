import { PriceCommas, SeaShadow, Speed, Time } from "../../Utils";

interface seaType {
  image: string;
  name: string;
  take: string;
  museum: string;
  speed: string;
  time: string;
  size: string;
  price: number;
}

const Sea = ({
  image,
  name,
  take,
  museum,
  speed,
  time,
  size,
  price,
}: seaType) => {
  return (
    <>
      <img src={image} className="image" />

      <div className="intro">
        <span className="name">{name}</span>

        <div className="catch pick">
          <p className="phrase">감정</p>
          <p>{take}</p>
        </div>

        <div className="meseum pick">
          <p className="phrase">감정</p>
          <p>{museum}</p>
        </div>

        <div className="chart">
          <div className="chart-nav">
            <p className="nav">속도</p>
            <p className="nav">출현시간</p>
            <p className="nav">크기</p>
            <p className="nav">가격</p>
          </div>

          <div className="chart-nav">
            <p className="speed nav">{Speed(speed)}</p>
            <p className="time nav">{Time(time)}</p>
            <p className="size nav">{SeaShadow(size)}</p>
            <p className="price nav">{PriceCommas(price)} 벨</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sea;
