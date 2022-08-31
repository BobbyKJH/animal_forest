import styled from "styled-components";

interface Type {
  show?: number;
}

export const BannerStyle = styled.div<Type>`
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
  position: relative;
  .group-btn {
    text-align: center;
    margin: 50px 0 30px 0;
    .btn {
      display: inline-block;
      border-radius: 20px;
      border: none;
      background-color: #ced46a;
      color: #07553b;
      font-size: 1rem;
      font-weight: 900;
      padding: 15px 0;
      margin: 0 20px;
      width: 300px;
      cursor: pointer;
    }
    #fish {
      :hover {
        background-color: #0063b2;
        color: #9cc3d5;
      }
    }
    #bugs {
      :hover {
        background-color: #295f2e;
        color: #ffe67c;
      }
    }
    #sea {
      :hover {
        background-color: #9cc3d5;
        color: #0063b2;
      }
    }
  }

  .banner-title {
    opacity: 1;
    font-size: 2rem;
    font-weight: 900;
    margin: 0 0 20px 0;
  }
  .banner-card {
    transition: 1s;
  }
`;

export const BannerCard = styled.div`
  display: flex;
  height: 240px;
  justify-content: space-between;
  align-items: center;
`;
