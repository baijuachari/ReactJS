import React from 'react';

const UserOutput = (props) => {
	return (
		<div>
			<h2>User Output </h2>
			<div>			
				<textarea rows="4" cols="50" value={props.text1} onChange={props.change}></textarea>
			</div>
			<div>
				<textarea rows="4" cols="50" value={props.text2}>{props.children}</textarea>
			</div>			
		</div>
	);
};

export default UserOutput