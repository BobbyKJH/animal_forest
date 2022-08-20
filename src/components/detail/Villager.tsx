// Utils
import { Gender, Hobby, Personality } from "../../Utils";

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
}: VillagerDetail) => (
  <>
    <img src={image} className="image" />
    <div className="intro">
      <span className="name">{name}</span>
      <div className="Information">
        <p className="gender">성별: {Gender(gender)}</p>
        <p className="personality">성격: {Personality(personality)}</p>
        <p className="hobby">취미: {Hobby(hobby)}</p>
        <p className="talk">{talk}</p>
      </div>
    </div>
  </>
);

export default Villager;
