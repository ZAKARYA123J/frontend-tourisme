import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; 
import { I18nextProvider } from "react-i18next";
import './i18n';

import App from "./App";
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter> 
      
        <App />
    
    </BrowserRouter>
  </Provider>
);
