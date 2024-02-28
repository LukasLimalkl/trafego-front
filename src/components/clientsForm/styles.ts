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

  .all-clients {
    background-color: #f3f2f5;
    width: 300px;
    margin-top: 2rem;
  }

  .title-clients {
    font-size: 1.6rem;
  }

  li {
    list-style: none;
  }

  .list-clients {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  .button-box {
    display: flex;
    flex-direction: column;
  }

  span {
    display: flex;
    align-items: center;
  }
`;
