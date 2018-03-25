
// library that allows us to create React Components 
import React from 'react';

// library that allows us to work with our components in context of the DOM
import ReactDOM from 'react-dom';

// importing components from App.js
import App from './App';

// Rendering the App Component in JSX format
ReactDOM.render (
    // * Video 4 Notes 
    // pass data into the components via PROPS which are very similar to 
    // attributes in HTML
    <App txt="this is the prop text"/>,
    
    // to the target we created with ID of root
    document.getElementById('root')
);