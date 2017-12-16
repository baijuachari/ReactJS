import React, { Component } from 'react';
import './App.css';
import './UserModules/userStyle.css';
import UserInput from './UserModules/UserInput.js';
import UserOutput from './UserModules/UserOutput.js';

class App extends Component {

    state = {
        userName: '',
        textArea1: '',
        textArea2: ''
    }

    userNameChangeHandler = (event) => {
        this.setState ({
            userName: event.target.value,
            textArea1: event.target.value
        });
    };

    clickHandler = (event) => {
        this.setState ({
            textArea1: "hello",
            textArea2: "world"
        });

    };

    render() {
        return (
            <div className="App">
                <h1>Hello App</h1>
                <div className="user_input">
                    <UserInput
                        userName={this.state.userName}
                        clicked={this.clickHandler}
                        change={this.userNameChangeHandler}>
                    </UserInput>
                </div>
                <div className="user_input">
                    <UserOutput userName={this.state.userName}
                        text1={this.state.textArea1}
                        text2={this.state.textArea2}
                        change={this.userNameChangeHandler}>
                        hello world this is sample text
                        Hello another worls this is another text
                    </UserOutput>
                </div>
            </div>
        );
    }
}

export default App;
