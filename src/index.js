import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import "./service/fireBase";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
