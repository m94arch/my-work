import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/redux-Store';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={reduxStore} >   <App /> </Provider>);