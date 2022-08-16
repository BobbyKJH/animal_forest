import styled from "styled-components";

export const CardStyle = styled.div`
  display: inline-flex;
  overflow: hidden;
  text-align: center;
  width: 430px;
  border: 5px solid black;
  border-radius: 10px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 7px 7px 7px 7px #00000050;
  transition: 0.5s;
  &:hover {
    box-shadow: #00000070;
    transform: translateY(-20px);
  }
  .image {
    width: 230px;
    margin: 20px 100px;
  }
  .title {
    padding: 0 0 20px 0;
    width: 100%;
  }
`;

export const MusicCardStyle = styled(CardStyle)`
  audio {
    width: 90%;
    margin: 0 auto;
  }
  .image {
    margin: 20px 100px 0 100px;
  }
  .title {
    padding: 20px 0;
  }
  .link {
    width: 100%;
    padding: 20px 0 3px 0;
    margin-bottom: 10px;
    font-size: 12px;
    text-align: center;
    :hover {
      text-decoration: underline;
    }
  }
`;
