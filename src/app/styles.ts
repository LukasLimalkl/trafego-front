import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 1.5rem;
  .switch-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sol {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.fontColor};
  }

  .lua {
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.fontColor};
  }

  .span-switch {
    width: 50px;
  }
`;
