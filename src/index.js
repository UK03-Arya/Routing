import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ReactDOM } from "react";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';

/* added by me */
import {createRoot} from 'react-dom/client'
const container = document.getElementById('root');  //this 'root' element is in index.html file
const root = createRoot(container);


//  ReactDOM.render(
//   // <CookiesProvider>
//     <BrowserRouter>
//       <App />
//       </BrowserRouter>
//     // </CookiesProvider>
// );

/* in new version of react , use root.render */
root.render(
  <React.StrictMode>
    {/* <CookiesProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </CookiesProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
