import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../services/api';

interface User {
  email: String;
  password: String;
}

interface AuthContextData {
  loading: boolean;
  user: User | null;
  signIn(email: String, password: String): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      api.defaults.headers.Authorization = `Bearer ${storedToken}`;
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  async function signIn(email: String, password: String) {
    // const response = await api.post('/session', {
    //   email,
    //   password,
    // });

    new Promise((_) => setTimeout(() => {}, 2000));

    const response = {
      data: {
        user: {
          email,
          password,
        },
        token: 'a8qj398fq9fh8qwefjausjfhjkasdfh24hfuhsdj',
      },
      status: 200,
    };

    if (response.status === 200) {
      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(user);

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        loading: loading,
        user: user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
