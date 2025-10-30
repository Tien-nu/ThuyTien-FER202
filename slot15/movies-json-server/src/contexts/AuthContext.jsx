// src/contexts/AuthContext.js
import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.get(`http://localhost:3001/accounts?email=${email}&password=${password}`);
      if (res.data.length > 0) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data[0] });
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'Email hoặc mật khẩu không đúng' });
      }
    } catch {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Lỗi kết nối server' });
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={{ login, logout }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
