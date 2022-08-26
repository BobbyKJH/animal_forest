// React
import { Link } from "react-router-dom";
// Redux
import { useAppDispatch } from "../store/hooks";
import { villagerReset } from "../store/search/villagerSlice";
import { fishReset } from "../store/search/fishSlice";
import { bugReset } from "../store/search/bugSlice";
import { seaReset } from "../store/search/seaSlice";
import { artReset } from "../store/search/artSlice";
import { fossilReset } from "../store/search/fossilSlice";
// Style
import { HeaderStyle } from "../style/HeaderStyle";

const Header = () => {
  const Reset = useAppDispatch();

  // 선택시 state 상태 초기화
  const ResetLink = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    if (id === "villager") {
      Reset(villagerReset());
    } else if (id === "fish") {
      Reset(fishReset());
    } else if (id === "bug") {
      Reset(bugReset());
    } else if (id === "sea") {
      Reset(seaReset());
    } else if (id === "art") {
      Reset(artReset());
    } else if (id === "fossil") {
      Reset(fossilReset());
    }
  };

  return (
    <HeaderStyle>
      <div className="header">
        <span className="title">
          <Link to="/" id="title" className="link">
            동물의 숲
          </Link>
        </span>

        <span className="nav">
          <Link
            className="link"
            id="villager"
            to="/villagers"
            onClick={ResetLink}
          >
            마을주민
          </Link>
        </span>

        <span className="nav">
          <Link className="link" to="/">
            생물
          </Link>
          <ul>
            <Link to="/fish" className="nav-link" id="fish" onClick={ResetLink}>
              물고기
            </Link>
            <Link to="/bugs" className="nav-link" id="bug" onClick={ResetLink}>
              곤충
            </Link>
            <Link to="/sea" className="nav-link" id="sea" onClick={ResetLink}>
              해산물
            </Link>
          </ul>
        </span>

        <span className="nav">
          <Link className="link" to="/">
            미술품 및 화석
          </Link>
          <ul>
            <Link to="/art" className="nav-link" id="art" onClick={ResetLink}>
              미술품
            </Link>
            <Link
              to="/fossil"
              className="nav-link"
              id="fossil"
              onClick={ResetLink}
            >
              화석
            </Link>
          </ul>
        </span>

        <span className="nav">
          <Link className="link" to="/">
            음악
          </Link>
          <ul>
            <Link to="/song" className="nav-link">
              노래
            </Link>
            <Link to="/backgroundmusic " className="nav-link">
              배경음악
            </Link>
          </ul>
        </span>
      </div>
    </HeaderStyle>
  );
};

export default Header;
