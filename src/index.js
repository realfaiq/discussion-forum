import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUp from './components/SignUp';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SignUp />
    {/* Logic here for Login and displaying the Home Page , Routing */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
