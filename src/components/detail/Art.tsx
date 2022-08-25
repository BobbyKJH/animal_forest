import { FakeHas, PriceCommas } from "../../util/Utils";

interface artType {
  image: string;
  name: string;
  museum: string;
  fake: boolean;
  buy: number;
  sell: number;
}

const Art = ({ image, name, museum, fake, buy, sell }: artType) => {
  return (
    <>
      <img src={image} className="image" />
      <div className="intro">
        <span className="name">{name}</span>

        <div className="museum pick">
          <p className="phrase">감정</p>
          <p>{museum}</p>
        </div>

        <div className="chart">
          <div className="chart-nav">
            <p className="nav">가품</p>
            <p className="nav">구매가격</p>
            <p className="nav">판매가격</p>
          </div>

          <div className="chart-nav">
            <p className="fake nav">{FakeHas(fake)}</p>
            <p className="buy nav">{PriceCommas(buy)} 벨</p>
            <p className="sell nav">{PriceCommas(sell)} 벨</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
