import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import { BrowserRouter } from "react-router-dom";

import "./main.scss";
import AuthContextProvider from "./components/context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
