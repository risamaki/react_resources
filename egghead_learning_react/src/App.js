import React from 'react';

// ! Method 1 to Creating Components - State Function Component
// all React Components must start with a captial letter to differ from HTML elements
class App extends React.Component {
    // * Video 5 Notes
    // State is a collection of values that are meant to be updated by our component
    // Props on the other hand are static and cannot be altered
    constructor() {
        // gives the keyword -this.- the context of our component
        // rather than of React.component
        super();
        this.state = {
            txt: 'this is the state txt'
        }
    }

    // * Video 5 Notes Part 2
    // meant to be updated by our component 
    // takes in an event - and this is part of React -- just a custom method
    update(e) {
        this.setState({
            txt: e.target.value
        })

    }
  render() {
    //  * Video 2 Notes 
    // note: in jsx className = class in HTML
    // equivalent of doing React.createElement('h1',    null, 'Hello World')
    //                 -->       createElement(element, prop,  String)

    // * Video 3 Notes 
    // we cannot do <h1> Hello World </h1> <b>Bold</b>
    // because that is the equivalent to doing 
    // React.createElement() React.createElement()
    // --> can't have two functions called right after each other 

    // fix that by wrapping everything in a div (essentially like usual HTML)
    // --> you can take away the brackets as long as you put the <div> on the same line
    //     as the return

    // * Video 4 Notes Part 1
    // can access the props via {} and this.props.<prop we want> 
    // return <h1>{this.props.txt}</h1>
    // OR
    // let txt = this.props.txt
    // return <h1>{txt}</h1>
    
    // * Video 5 Notes Part 1
    // similar to props we use {} for state
    return (
        <div>
            <input type="text" onChange={this.update.bind(this)}/>
            <h1>{this.state.txt}</h1>
        </div>
        
    )
        

  }
}

// * Video 4 Notes Part 2
// ! NOTE: propTypes is deprecated (https://stackoverflow.com/questions/44573199/cannot-read-property-string-of-undefined-react-proptypes-layoutproptypes-j)
//  define properties that we are going to be looking for
// in our component
// Object where each key is the name and the value is the type we are looking for
// App.propTypes =  {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number
// }

// * Video 4 Notes Part 3
App.defaultProps = {
    txt:"this is the default txt"
}

// ! Method 2 to Creating Components - Stateless Function Component 
// goes straight to the JSX
// const App = () => <h1>Hello</h1>

export default App