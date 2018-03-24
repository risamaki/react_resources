
// library that allows us to create React Components 
import React from 'react';

// library that allows us to work with our components in context of the DOM
import ReactDOM from 'react-dom';

// importing components from App.js
import App from './App';

ReactDOM.render (
    <App />,
    document.getElementById('root')
);