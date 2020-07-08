import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 320px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      width: 100%;
      font-weight: bold;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
    }

    input {
      color: #3c3c3c;
      padding: 5px 10px;
      width: 80%;
      margin-top: 10px;
      border: 1px solid #3c3c3c;
      background-color: #f1f1f1;
    }

    button {
      font-weight: bold;
      padding: 8px 0;
      width: 80%;
      margin: 15px;
      color: #222;
      border: 1px solid #3c3c3c;
      background-color: #fff;
      transition: background-color 0.5s;

      &:hover {
        color: #fff;
        border: 1px solid #fff;
        background-color: #222;
      }
    }
  }
`;
