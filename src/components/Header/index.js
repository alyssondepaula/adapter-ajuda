import React from 'react';

 import { Container, Logo, ChangeIdiom } from './styles';

function Header() {
  return <Container>

      <Logo>

      </Logo>
      <input placeholder='Procure por um conteúdo'/>
      <button>
          <ChangeIdiom/>
          <h5>Pt-Br</h5>
      </button>
  </Container>;
}

export default Header;

