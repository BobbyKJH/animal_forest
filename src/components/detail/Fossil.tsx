import { PriceCommas } from "../../Utils";

interface fossilType {
  image: string;
  name: string;
  museum: string;
  price: number;
}

const Fossil = ({ image, name, museum, price }: fossilType) => {
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
            <p className="nav">가격</p>
          </div>

          <div className="chart-nav">
            <p className="price nav">{PriceCommas(price)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fossil;
