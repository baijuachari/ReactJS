import React from 'react';
const CharComponent = (props) => {
	return (
		<div onClick={props.charClicked}>{props.inChar}</div>
	);
};

export default CharComponent;