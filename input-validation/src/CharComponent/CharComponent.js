import React from 'react';
const CharComponent = (props) => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		margin: '16px',
		border: '1px solid black',
		width: '25px',
		height: '20px',
		textAlign: 'center'
	};

	return (
		<div style={style} onClick={props.charClicked}>{props.inChar}</div>
	);
};

export default CharComponent;