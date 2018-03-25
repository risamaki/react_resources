import React from 'react';

// * Component 1
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
            {/* where we had our input, we render a Widget Component
                and pass in an update prop (the method) */}
            <Widget update={this.update.bind(this)}/>
        </div>   
    )
  }
}

// * Component 2
// Stateless Function 
const Widget = (props) => 
    // child component is updating the state of our parent component
    // via the update method that is passed in via a prop
    <input type="text" onChange={props.update}/>

export default App