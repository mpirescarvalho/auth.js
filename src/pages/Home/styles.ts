import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-weight: bold;
    padding: 8px 0;
    width: 200px;
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
`;
