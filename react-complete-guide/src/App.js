import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

	state = {
		persons: [
			{name: 'Baiju', age: 28},
			{name: 'Anil', age: 29},
			{name: 'Melissa', age: 26}
		],
        showPerson: true
	}

	// switchNameHandler = (newName) => {
	// 	console.log('Clicked');
	// 	//this.state.persons[0].name = 'Baiju Achari';
	// 	this.setState({
	// 		persons: [
	// 			{name: newName, age: 28},
	// 			{name: 'Manu', age: 29},
	// 			{name: 'Stephanie', age: 27}
	// 		],            
	// 	});
	// }

    deletePersonHandler = (personIndex) => {
        let pArray = this.state.persons;
        pArray.splice(personIndex, 1);
        this.setState({
            persons: pArray
        });
    }

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{name: 'Baiju Raghavan Achari', age: 28},
				{name: event.target.value, age: 29},
				{name: 'Stephanie', age: 27}
			]
		});
	}

    togglePersonDisplay = (event) => {  
        this.setState({
            showPerson: !this.state.showPerson
        });
    }

    render() {

    	const style = {
    		backgroundColor: 'white',
    		font: 'inherit',
    		border: '1x solid blue',
    		padding: '8px',
    		cursor: 'pointer'
    	}

        let persons = null;
        if (this.state.showPerson) {
            persons = this.state.persons.map((person, index) => {
                return <Person 
                    name={person.name} 
                    click={this.deletePersonHandler.bind(this, index)}
                    age={person.age}>
                </Person>
            });
        }

        return ( 
        	<div className = "App">
            	<h1> Hi I am a reat app </h1> 
            	<button 
            		style={style}
            		onClick={this.togglePersonDisplay}>Toggle Persons</button>                
                {persons}
            </div>
        );
    }
}

export default App;