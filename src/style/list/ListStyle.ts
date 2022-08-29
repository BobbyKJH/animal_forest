import styled from "styled-components";

export const ListStyle = styled.div`
  margin: 0 auto;
  width: 1440px;
  .list-title {
    padding: 50px 0;
    margin: 40px 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
  }
  .input-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search {
    display: block;
    padding: 10px;
    text-align: right;
    .search-input {
      display: inline-block;
      padding: 10px;
      width: 250px;
    }
    .search-btn {
      padding: 10px;
      width: 100px;
    }
  }

  select {
    display: block;
    align-items: center;
    width: 500px;
    height: 30px;
    font-size: 1rem;
    option {
      text-align: center;
      margin: 10px;
    }
  }
`;
