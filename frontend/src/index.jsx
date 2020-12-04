import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);
