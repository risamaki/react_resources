
// library that allows us to create React Components 
import React from 'react';

// library that allows us to work with our components in context of the DOM
import ReactDOM from 'react-dom';

// importing components from App.js
import App from './App';

// Rendering the App Component in JSX format
ReactDOM.render (
    <App />,
    // to the target we created with ID of root
    document.getElementById('root')
);