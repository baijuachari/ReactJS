import React from 'react';
const Validator = (props) => {

	const style = {    		
		border: '2px solid #eee',
		padding: '25px',
		margin: '40px 25%',
		width: '50%'
    };

    let message = (props.inputLength < 5) ? 'Text too short' : 'Text long enough';

	return (		
		<div style={style}>Input length: {props.inputLength} Message: {message}</div>
	);
};

export default Validator;