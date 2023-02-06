import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { reduxstore } from "./redux/redux-store";
import AppRoutes from "./routes/app-routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={reduxstore}> 
   <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  </Provider>
);
