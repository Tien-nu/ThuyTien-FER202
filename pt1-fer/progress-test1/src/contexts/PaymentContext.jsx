// src/contexts/PaymentContext.jsx
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { paymentReducer, initialPaymentState } from '../reducers/movieReducers'; // đường dẫn đúng với project của bạn

const PaymentContext = createContext();

export const usePayments = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentReducer, initialPaymentState);
  const { payments, loading } = state;

  const apiUrl = 'http://localhost:3001/payments'; // JSON server URL

  // Load all payments
  const fetchPayments = async () => {
    try {
      dispatch({ type: 'START_LOADING' });
      const res = await axios.get(apiUrl);
      dispatch({ type: 'SET_PAYMENTS', payload: res.data });
    } catch (err) {
      console.error('Failed to load payments:', err);
    }
  };

  // Add payment
  const addPayment = async (payment) => {
    try {
      const res = await axios.post(apiUrl, payment);
      dispatch({
        type: 'SET_PAYMENTS',
        payload: [...payments, res.data],
      });
      return { success: true };
    } catch (err) {
      console.error('Failed to add payment:', err);
      return { success: false };
    }
  };

  // Update payment
  const updatePayment = async (id, updated) => {
    try {
      const res = await axios.put(`${apiUrl}/${id}`, updated);
      const updatedList = payments.map((p) => (p.id === id ? res.data : p));
      dispatch({ type: 'SET_PAYMENTS', payload: updatedList });
      return { success: true };
    } catch (err) {
      console.error('Failed to update payment:', err);
      return { success: false };
    }
  };

  // Delete payment
  const deletePayment = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      const newList = payments.filter((p) => p.id !== id);
      dispatch({ type: 'SET_PAYMENTS', payload: newList });
      return { success: true };
    } catch (err) {
      console.error('Failed to delete payment:', err);
      return { success: false };
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        payments,
        loading,
        dispatch,
        fetchPayments,
        addPayment,
        updatePayment,
        deletePayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
