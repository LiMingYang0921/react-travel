import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css';
import './i18n/configs';
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from 'axios'
axios.defaults.headers['x-icode'] = 'DB1C151B829D093E'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


