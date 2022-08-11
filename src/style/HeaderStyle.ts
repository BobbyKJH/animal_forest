import styled, { keyframes } from "styled-components";

const Create = keyframes`
0%{
  opacity: 0;
  transform: translateY(-5%);
}
100%{
  opacity: 1;
  transform: translateY(0);
  
}
`;

export const HeaderStyle = styled.div`
  background-color: #fff;
  text-align: center;
  z-index: 10;
  .header {
    background-color: #fff;
    display: flex;
    margin: 0 auto;
    width: 1440px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      font-size: 2rem;
    }
    #title {
      font-weight: 900;
      width: 100%;
    }

    .nav {
      position: relative;
      display: block;
      width: 20%;
      max-height: 78px;

      .link {
        padding: 30px 0;
      }
      ul {
        display: none;
        z-index: 1;
        .nav-link {
          background-color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 20px 0;
          &:hover {
            background-color: #000;
            color: #fff;
            transition: 0.5s;
          }
        }
      }
      &:hover {
        border-bottom: 5px solid #000;
        ul {
          overflow: hidden;
          display: block;
          position: absolute;
          width: 100%;
          animation: ${Create} 1.5s;
          border: 3px solid #000;
          border-top: none;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
    }
  }
`;
