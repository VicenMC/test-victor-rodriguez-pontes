import React, {StrictMode} from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store/store";

import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_BACKEND || 'http://localhost:3001'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
);

reportWebVitals();
