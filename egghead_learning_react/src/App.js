import React from 'react';

// ! Method 1 to Creating Components - State Function Component
// all React Components must start with a captial letter to differ from HTML elements
class App extends React.Component {
  render() {
    //  * Video 2 Notes 
    // note: in jsx className = class in HTML
    // equivalent of doing React.createElement('h1',    null, 'Hello World')
    //                 -->       createElement(element, prop,  String)

    // * Video 3 Notes 
    // we cannot do <h1> Hello WOrld </h1> <b>Bold</b>
    // because that is the equivalent to doing 
    // React.createElement() React.createElement()
    // --> can't have two functions called right after each other 

    // fix that by wrapping everything in a div (essentially like usual HTML)
    // --> you can take away the brackets as long as you put the <div> on the same line
    //     as the return
    return (
        <div>
            <h1>Hello World </h1>
            <b>Bold</b>
        </div>
    )
  }
}


// ! Method 2 to Creating Components - Stateless Function Component 
// goes straight to the JSX
// const App = () => <h1>Hello</h1>

export default App