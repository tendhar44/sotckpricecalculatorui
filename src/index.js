import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import App from './App';
// import ShoppingList from './shoplist';
import Nav from './nav';
import StockPriceCalculator from './stockcalc';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import allReducer from './reducers';
import ReduxTest from './reduxtest';
import { Provider } from 'react-redux'
import FootNote from './footnote';
import FormTest from './formtest';
import Slider from './slider';
import TenzForm from './tenzform';

import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';

const store = configureStore({reducer: allReducer});
// const store = configureStore();

//store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
      {/* <App /> */}
      {/* <ShoppingList name="Mark" /> */}
      {/*<Provider store={store}>
      <ReduxTest />
      </Provider>
      <FootNote /> */}
      <Route path="/" element={ //wrape in fragment <></> for multi components
        <>
          <Nav />
          <Slider />
          <StockPriceCalculator />
          <FootNote />
        </>
      } />
      <Route path="/tenzform" element={<TenzForm />} />
    </Routes>
   
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
