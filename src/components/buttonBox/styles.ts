import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  button {
    background: none;
    width: 50px;
    height: 30px;
  }
  .edit-button {
    border: 1px solid blue;
    border-radius: 10px;
  }

  .edit-icon {
    color: blue;
  }

  .delete-button {
    border: 1px solid red;
    border-radius: 10px;
  }

  .delete-icon {
    color: red;
  }

  .verify-button {
    border: 1px solid green;
    border-radius: 10px;
  }

  .verify-icon {
    color: green;
  }
`;
