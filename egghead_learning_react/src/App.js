import React from 'react';
class App extends React.Component {
    
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

    // update method that will update that value of text
    update(e) {
        this.setState({
            txt: e.target.value
        })
    }
    
  render() {
    // similar to props we use {} for state
    return (
        <div>
            <h1>{this.state.txt}</h1>
            <input type="text" onChange={this.update.bind(this)}/>
        </div>   
    )
  }
}

export default App