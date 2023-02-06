import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { reduxstore } from './redux/redux-store';
import Routertask from './Routers/Router-task';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={reduxstore}>
<BrowserRouter>
<Routertask/>
</BrowserRouter>
</Provider>);

