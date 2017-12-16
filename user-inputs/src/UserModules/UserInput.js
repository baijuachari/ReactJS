import React from 'react';

const UserInput = (props) => {
	return (
		<div>
			<span>User Name: 
				<input type="text" 
					onChange={props.change} 
					name="username" 
					value={props.userName}/>
				<input type="button" 
					value="Reset"
					onClick={props.clicked}/>

			</span>
		</div>
	);
};

export default UserInput