import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 16vh;
  flex-direction: row;
  padding: 16px 48px;
  align-items: center;
  justify-content: space-around;

  >input {

    width: 70%;
    height: 6vh;
    border-radius: 24px;
    border: 0;
    color: #aaa;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid rgba(0,0,0,0.45);

  }

  > button{

    width: 6%;
    height: 6vh;
    background-color: transparent;
    border-radius: 24px;
    border: 0;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #aaa;

  }

`;

export const Logo = styled.img.attrs({
  src: 'images/adapterlogo.png',
  alt: 'LogoAdapter'
})`
  height: 36px;
`;

export const ChangeIdiom = styled.img.attrs({
  src: 'images/brasil.png',
  alt: 'LogoAdapter'
})`

  height: 36px;
`;
