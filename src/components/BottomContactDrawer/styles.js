import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #076376;
  align-self: flex-end;
  width: 100%;
  height: 20%;
  overflow: auto;
  border-radius: 0 0 98px 0;
  align-items: center;
  justify-content: space-around;
  padding: 0 8%;

  > div {

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
  }

   h6 {
      font-size: 24px;
      font-weight: 400;
      color: white;
  }

  > img {

      height: 48px;
      width: 48px;
  }


`;
