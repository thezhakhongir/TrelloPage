import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./service/fireBase";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
