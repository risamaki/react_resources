import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {
        // AJAX call
        // fix CORS error by making endpoint https
        fetch('https://swapi.co/api/people/?format=json') 
            .then (response => response.json())
            .then (
                ({results:items}) => this.setState({items})
            )
    }

    filter (e) {
        this.setState({filter:e.target.value})
    }

    render() {
        // ! Version 1
        // return (
        //     <div>
        //         {/*  Each child in an array or iterator should have a unique "key" prop. 
        //              - Fix this by adding a key to the h4*/}
        //         {items.map(item => 
        //             <h4 key={item.name}>{item.name}</h4>)}
        //     </div>
        // )

        // ! Version 2 - using a Person Component
        let items = this.state.items
        if (this.state.filter) {
            items = items.filter ( item => 
            item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        return (
            <div> 
                <input type="text"
                onChange={this.filter.bind(this)}/>
                {items.map(item => 
                    // new error:  Each child in an array or iterator should have a unique "key" prop. (Ie. key is needed among siblings)
                    <Person key={item.name} person={item} />)}
            </div>
        )
    }
}


const Person = (props) => <h4> {props.person.name} </h4>


export default App