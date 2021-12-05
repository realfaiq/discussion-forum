import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUp from './components/SignUp';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
