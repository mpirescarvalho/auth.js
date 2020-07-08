import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../../contexts/auth';

import { Container } from './styles';

const Home: React.FC = () => {
  const { user, signOut, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace('/');
    }
  }, [user, history]);

  function handleSignOut() {
    signOut();
  }

  if (loading) {
    return null;
    //TODO: Loading..
    //TODO: useAuthorization
  }

  return (
    <Container>
      <button type="button" onClick={handleSignOut}>
        SAIR
      </button>
    </Container>
  );
};

export default Home;
