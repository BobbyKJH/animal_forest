import { isOrderable, PriceCommas } from "../../util/Utils";

interface SongType {
  image: string;
  name: string;
  audio: string;
  orderable: boolean;
  buy: number;
  sell: number;
}

const Song = ({ image, name, audio, orderable, buy, sell }: SongType) => {
  return (
    <>
      <img src={image} className="image" />

      <div className="intro">
        <span className="name">{name}</span>

        <audio src={audio} className="audio" controls />

        <div className="chart">
          <div className="chart-nav">
            <p className="nav">주문</p>
            <p className="nav">구매</p>
            <p className="nav">판매</p>
          </div>
          <div className="chart-nav">
            <p className="nav">{isOrderable(orderable)}</p>
            <p className="nav">
              {!buy ? <>구매불가</> : <>{PriceCommas(buy)} 벨</>}
            </p>
            <p className="nav">{PriceCommas(sell)} 벨</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
