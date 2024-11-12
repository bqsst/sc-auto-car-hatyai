import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import 'react-toastify/dist/ReactToastify.css';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRGNGfV5ycEVPalhSTnZbUiweQnxTdEFiWH5ecH1RQGNeV0J/WQ==');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

reportWebVitals();
