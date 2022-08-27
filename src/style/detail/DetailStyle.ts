import styled, { keyframes } from "styled-components";

interface Text {
  bubble: string;
  text: string;
}

const Opacity = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const DetailStyle = styled.div`
  display: flex;
  width: 1200px;
  height: 600px;
  margin: 80px auto;
  border: 3px solid #000;
  overflow: hidden;
  border-radius: 10px;
  animation: ${Opacity} 0.5s;
  .image {
    width: 600px;
    box-sizing: border-box;
  }
  .intro {
    .name {
      text-align: center;
      font-size: 2rem;
      padding: 30px 0;
      font-weight: 900;
      margin: 30px 0 0 0;
      border-radius: 10px;
      box-shadow: 4px 4px 4px 4px #00000090;
    }

    .pick {
      padding: 0 15px;
      .phrase {
        text-align: center;
        font-size: 1.5rem;
        padding: 30px 0 0 0;
        font-weight: 700;
      }
      p {
        padding: 15px 0 0 0;
        font-weight: 500;
        line-height: 20px;
      }
    }
    .chart {
      position: absolute;
      bottom: 15px;
      border: 5px solid black;
      border-radius: 5px;
      margin: 0 auto;
      width: 540px;
      background-color: #fff;

      .chart-nav {
        display: flex;
        .nav {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 135px;
          text-align: center;
          padding: 10px 0;
          white-space: pre-wrap;
          line-height: 22px;
        }
      }
    }
    border-left: 3px solid #00000090;
    box-sizing: border-box;
    padding: 0 25px;
    font-size: 1rem;
    position: relative;
    width: 600px;
  }
`;

export const BugStyle = styled(DetailStyle)`
  .intro {
    .chart {
      .chart-nav {
        .nav {
          width: 180px;
        }
      }
    }
  }
`;

export const FossilStyle = styled(DetailStyle)`
  .intro {
    .chart {
      .chart-nav {
        .nav {
          width: 100%;
        }
      }
    }
  }
`;

export const SongStyle = styled(DetailStyle)`
  .intro {
    .audio {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 100%;
      color: aqua;
    }
    .chart {
      .chart-nav {
        .nav {
          width: 180px;
        }
      }
    }
  }
`;

export const VillagerStyle = styled(DetailStyle)<Text>`
  .intro {
    .name {
      padding: 35px 0;
      border-radius: 40px;
      background-color: ${(props) => props.bubble};
      color: ${(props) => props.text};
    }
  }
  .name {
    font-weight: 900;
  }
  .talk {
    font-size: 2rem;
    text-align: center;
    padding: 50px 0;
  }
`;
