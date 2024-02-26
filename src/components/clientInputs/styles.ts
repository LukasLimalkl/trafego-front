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

  .name-client {
  }

  .user-client {
    width: 250px;
  }

  button {
    width: 50px;
    height: 30px;
  }
  .button-container {
    flex-direction: row-reverse;
    display: flex;
  }
`;
