import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";

// import SWReducer from "./SWReducer";

// let store = createStore();

ReactDOM.render(
	// <Provider store={store}>
	<App />,
	// </Provider>,
	document.getElementById("root")
);
registerServiceWorker();
