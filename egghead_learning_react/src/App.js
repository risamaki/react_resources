import React from 'react';

// * Method 1 to Creating Components - State Function Component
// * all React Components must start with a captial letter to differ from HTML elements
class App extends React.Component {
  render() {
    // note: in jsx className = class in HTML
    // equivalent of doing React.createElement('h1',    null, 'Hello World')
    //                 -->       createElement(element, prop,  String)
    return <h1>Hello World </h1>
  }
}


// * Method 2 to Creating Components - Stateless Function Component 
// goes straight to the JSX
// const App = () => <h1>Hello</h1>


export default App