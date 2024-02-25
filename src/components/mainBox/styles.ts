import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  .title {
    color: ${(props) => props.theme.fontColor};
  }

  .box {
    width: 600px;
    height: 600px;
    background: ${(props) => props.theme.fontColor};
    display: flex;
    padding-top: 20px;
    box-sizing: border-box;
    justify-content: center;
    gap: 12rem;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }
  .box-one {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .box-two {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  span {
    color: ${(props) => props.theme.body};
  }
`;
