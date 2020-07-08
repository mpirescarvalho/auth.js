import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../../contexts/auth';

import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const { user, signIn, loading } = useAuth();

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
  }, [user, history]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    signIn(email, password);
  }

  if (loading) {
    return null;
    //TODO: Loading..
    //TODO: useAuthorization
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Auth.Js</h1>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
          type="password"
        />
        <button type="submit">ENTRAR</button>
      </form>
    </Container>
  );
};

export default Login;
