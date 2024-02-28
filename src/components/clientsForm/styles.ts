import styled from 'styled-components';

export const Container = styled.div`
  .box-clients {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    width: 350px;
    background: #f3f2f5;
    border: 2px solid ${(props) => props.theme.body};
    border-radius: 10px;
    height: 25px;
    padding-left: 5px;
  }

  input:focus {
    outline: 0;
  }

  .title-clients {
    font-size: 1.6rem;
  }
`;
