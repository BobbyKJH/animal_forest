// Utils
import { Time, FishLocation, PriceCommas, Shadow } from "../../Utils";

interface FishType {
  image: string;
  name: string;
  take: string;
  museum: string;
  location: string;
  time: string;
  size: string;
  price: number;
}

const Fish = ({
  image,
  name,
  take,
  museum,
  location,
  time,
  price,
  size,
}: FishType) => (
  <>
    <img src={image} className="image" />

    <div className="intro">
      <span className="name">{name}</span>

      <div className="catch pick">
        <p className="phrase">감정</p>
        <p>{take}</p>
      </div>

      <div className="museum pick">
        <p className="phrase">감정</p>
        <p>{museum}</p>
      </div>

      <div className="chart">
        <div className="chart-nav">
          <p className="nav">출현장소</p>
          <p className="nav">출현시간</p>
          <p className="nav">크기</p>
          <p className="nav">가격</p>
        </div>

        <div className="chart-nav">
          <p className="location nav">{FishLocation(location)}</p>
          <p className="time nav">{Time(time)}</p>
          <p className="size nav">{Shadow(size)}</p>
          <p className="price nav">{PriceCommas(price)} 벨</p>
        </div>
      </div>
    </div>
  </>
);
export default Fish;
