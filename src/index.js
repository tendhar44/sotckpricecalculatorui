import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import allReducer from './reducers';
import Nav from './nav';
import Slider from './slider';
import StockPriceCalculator from './stockcalc';
import FootNote from './footnote';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const store = configureStore({reducer: allReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={
        <>
          <Nav />
          <Slider />
          <Provider store={store}>
            <StockPriceCalculator />
          </Provider>
          <FootNote />
        </>
      } />
    </Routes>
  </Router>
);
