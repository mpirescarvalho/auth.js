import React from 'react';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <form>
        <h1>Auth.Js</h1>
        <input placeholder="Email" type="text" />
        <input placeholder="Senha" type="password" />
        <button type="submit">ENTRAR</button>
      </form>
    </Container>
  );
};

export default Login;
