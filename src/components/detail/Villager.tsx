// Utils
import { Gender, Hobby, Personality } from "../../util/Utils";

interface VillagerDetail {
  [key: string]: string;
}

const Villager = ({
  image,
  name,
  gender,
  personality,
  hobby,
  talk,
  birth,
}: VillagerDetail) => (
  <>
    <img src={image} className="image" />

    <div className="intro">
      <span className="name">{name}</span>

      <p className="talk">{talk}</p>

      <div className="chart">
        <div className="chart-nav">
          <p className="nav">성별</p>
          <p className="nav">성격</p>
          <p className="nav">취미</p>
          <p className="nav">생일</p>
        </div>

        <div className="chart-nav">
          <p className="gender nav">{Gender(gender)}</p>
          <p className="personality nav">{Personality(personality)}</p>
          <p className="hobby nav">{Hobby(hobby)}</p>
          <p className="birth nav">{birth}</p>
        </div>
      </div>
    </div>
  </>
);

export default Villager;
