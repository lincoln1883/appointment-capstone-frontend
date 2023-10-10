import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import TradeInput from '../components/TradeInput';

const mockStore = configureStore([]);

jest.mock('../utils/userStorage', () => ({
  getToken: jest.fn(() => 'sampleToken'),
  getUserRole: jest.fn(() => 'admin'),
  getUserId: jest.fn(() => 1),
}));

describe ('TradeInput', () => {
  let store;
  let initialState = {
    trades: {
      trades: [],
      loading: '',
      error:'',
    },
  };
});