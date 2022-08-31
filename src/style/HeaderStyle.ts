import styled, { keyframes } from "styled-components";

const Create = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
  
}
`;

export const HeaderStyle = styled.div`
  position: sticky;
  top: 0;
  background-color: #f0edcc;
  text-align: center;
  z-index: 10;
  .header {
    display: flex;
    margin: 0 auto;
    width: 1440px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #02343f;
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
      box-sizing: border-box;
      .link {
        padding: 30px 0;
        color: #02343f;
      }
      ul {
        display: none;
        z-index: 1;
        .nav-link {
          background-color: #fff;
          font-size: 0.9rem;
          padding: 20px 0;
          &:hover {
            background-color: #02343f;
            color: #fff;
            transition: 0.5s;
          }
        }
      }
      &:hover {
        border-bottom: 8px solid #02343f;
        ul {
          overflow: hidden;
          display: block;
          position: absolute;
          box-sizing: border-box;
          width: 100%;
          animation: ${Create} 0.2s;
          border: 5px solid #02343f;
          border-top: none;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
    }
  }
`;

export const FooterStyle = styled.div`
  height: 100px;
  background-color: #000;
  margin-top: 100px;
  .title {
    text-align: center;
    color: #fff;
    padding: 20px;
    font-size: 2rem;
  }
`;
