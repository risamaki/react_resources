import React from 'react';
import ReactDOM from 'react-dom';

{/* 
    - Will mount and unmount the component 
    - needs React DOM 
    - ie. essentially controls if the App component can be visualized or not
*/}
class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

class App extends React.Component {
    
    // State is a collection of values that are meant to be updated by our component
    // Props on the other hand are static and cannot be altered
    constructor() {
         // gives the keyword -this.- the context of our component
        // rather than of React.component
        super();
        this.state = {
            txt: 'Hello World',
            currentEvent: '--',
            refA: '',
            refB: '',
            lifecycleVal: 0

        }
        this.updateTxt= this.updateTxt.bind(this)
        this.updateCurrentEvent = this.updateCurrentEvent.bind(this)
        this.updateRef = this.updateRef.bind(this)
        this.updateLifecycle = this.updateLifecycle.bind(this)
    }

    // update method that will update that value of text in our input box
    updateTxt(e) {
        this.setState({
            txt: e.target.value
        })
    }

    updateCurrentEvent(e) {
        this.setState({
            currentEvent: e.type
        })
    }

    updateRef() {
        // refs returns the node we are refrencing
        // it allows us to differentiate between the two input boxes while still using the same method for both
        this.setState({
            // when not using callback use this.refs.a.value
            a: this.a.value,

            // can only get away with ReactDOM.findDOMNode(this.b).value when there is only one node in the Component's DOM
            // once you wrap it in a div etc you have to: 
            // - add a ref to the input component
            // - then grab the refs of the b component
            // - then grab the input ref's value
            b: this.b.refs.input.value
        })
    }

    updateLifecycle() {
        this.setState({
            lifecycleVal: this.state.lifecycleVal + 1
        })
    }

    componentWillMount() {
        // Fires off right before a component is mounted to a DOM
        // lets us know it is guaranteed to work properly
        // will only execute once
        console.log('Component Will Mount')
    }


    render() {
        console.log('render');
        // similar to props we use {} for state
        return (
            <div>
                <div>
                    <h1>{this.state.txt}</h1>
                    {/* where we had our input, we render a Widget Component
                        and pass in an update prop (the method) */}
                    <Widget update={this.updateTxt}/>
                    
                    {/* We want to pass Text Content into a prop */}
                    <Button> <Heart / > React </Button>
                </div>
                <hr /> {/* ---------------------------------- */}
                <div>
                    <h1>Current Event: {this.state.currentEvent}</h1>
                    <textarea
                        onKeyPress={this.updateCurrentEvent}
                        onCopy={this.updateCurrentEvent}
                        onCut={this.updateCurrentEvent}
                        onPaste={this.updateCurrentEvent}
                        onFocus={this.updateCurrentEvent}
                        onBlur={this.updateCurrentEvent}
                        onDoubleClick={this.updateCurrentEvent}
                    />
                </div>
                <hr/> {/* ------------ Video 10 ---------------- */}
                <div>
                    <input
                        /* ref can also take a callback because it references the node
                        same as ref={a} */
                        ref= {node => this.a = node}
                        type= "text"
                        onChange={this.updateRef}
                    />
                        State of A: {this.state.a}
                    <Input
                        /* Can Reference the instance of another component */
                        ref= {component => this.b = component}
                        update={this.updateRef}
                    />
                        State of B: {this.state.b}
                </div>
                <hr/> {/* ------------ Video 11 ---------------- */}
                <button onClick={this.updateLifecycle}>{this.state.lifecycleVal}</button>
            </div>
        )
    }

    componentDidMount() {
        // Will fire off once the component is mounted to the DOM
        console.log('Component Did Mount')
    }

    
    componentWillUnmount() {
        // will fire when the component is about to leave the DOM 
        console.log('Component Will Unmount')
    }

}



class Input extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update}/></div>
    }
}

// ! Stateless Function 
{ /* child component is updating the state of our parent component
    via the update method that is passed in via a prop */}
const Widget = (props) => 
    <input type="text" onChange={props.update}/>

{/* Allow the text content from the parent to pass through */}
const Button = (props) => 
    <button>{props.children}</button>

{/* can have nested components and still have text content passed through */}
class Heart extends React.Component {
    render() {
        return <span> &hearts; </span>
    }
}

export default Wrapper