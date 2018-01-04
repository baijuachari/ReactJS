import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

	constructor(props) {
		super(props);
		console.log('[Persons.js] Constructor called ', props);
	}

	componentWillMount() {
		console.log('[Persons.js] ComponentWillMount ');
	}
	
	componentDidMount() {
		console.log('[Persons.js] ComponentDidMount ');
	}

	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Persons.js] componentWillReceiveProps ', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] shouldComponentUpdate ', '[',nextProps, '][', nextState,']');
		return nextProps !== this.props.persons;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] componentWillUpdate ', '[',nextProps, '][', nextState,']');
	}

	componentDidUpdate() {
		console.log('[UPDATE Persons.js] componentDidUpdate ');
	}

	render() {
		console.log('[Persons.js] render ');
		return this.props.persons.map((person, index) => {
			return <Person
	          	click={() => this.props.clicked( index )}
	          	name={person.name}
	          	age={person.age}
	          	key={person.id}
	          	changed={(event) => this.props.changed( event, person.id )} />	
		});
	}
}

export default Persons;