import styled from 'styled-components';

export const Container = styled.div`
  .form-clients {
    background-color: ${(props) => props.theme.body};
    width: 300px;
    height: 100px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-radius: 20px;
    margin-bottom: 2rem;
  }

  li {
    list-style: none;
  }

  .list-clients {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }

  span {
    display: flex;
    align-items: center;
  }
`;
