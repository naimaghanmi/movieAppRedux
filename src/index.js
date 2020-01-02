import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider> 
  </BrowserRouter>
  ,rootElement
);
