// React
import { Link } from "react-router-dom";
// Style
import { HeaderStyle } from "../style/HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header">
        <span className="title">
          <Link to="/" id="title" className="link">
            동물의 숲
          </Link>
        </span>

        <span className="nav">
          <Link className="link" to="/villagers">
            마을주민
          </Link>
        </span>

        <span className="nav">
          <Link className="link" to="/">
            동물
          </Link>
          <ul>
            <Link to="/" className="nav-link">
              물고기
            </Link>
            <Link to="/" className="nav-link">
              곤충
            </Link>
            <Link to="/" className="nav-link">
              바다생물
            </Link>
          </ul>
        </span>

        <span className="nav">
          <Link className="link" to="/">
            예술작품 및 화석
          </Link>
          <ul>
            <Link to="/" className="nav-link">
              예술작품
            </Link>
            <Link to="/" className="nav-link">
              화석
            </Link>
          </ul>
        </span>

        <span className="nav">
          <Link className="link" to="/">
            음악
          </Link>
          <ul>
            <Link to="/" className="nav-link">
              노래
            </Link>
            <Link to="/" className="nav-link">
              배경음악
            </Link>
          </ul>
        </span>
      </div>
    </HeaderStyle>
  );
};

export default Header;
