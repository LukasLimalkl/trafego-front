import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;

  .client {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    gap: 1.6rem;
  }

  input {
    width: 200px;
    background: #f3f2f5;
    border: 2px solid ${(props) => props.theme.body};
    border-radius: 10px;
    height: 30px;
  }

  input:focus {
    outline: 0;
  }

  .name-client {
    padding-left: 5px;
  }

  .user-client {
    padding-left: 5px;
    width: 250px;
  }

  button {
    width: 60px;
    height: 30px;
    cursor: pointer;
  }

  button:hover {
    border: 2px solid #83caa2;
  }

  .button-container {
    flex-direction: row-reverse;
    display: flex;
  }

  .save-button {
    background: none;
    color: #83caa2;
    font-weight: 900;
    align-items: center;
    justify-content: center;
    display: flex;
    border: 1px solid #83caa2;
    border-radius: 16px;
  }
`;
