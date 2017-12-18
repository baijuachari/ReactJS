import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {

    state = {
        inputLength: 0,
        inputVal: ''
    };

    inputTextChanged = (event) => {
        this.setState ({
            inputLength: event.target.value.length,
            inputVal: event.target.value
        });
    };

    charClickedHandler = (event, index) => {
        let inputValArr = this.state.inputVal.split("");
        inputValArr.splice(index, 1);
        let newString = inputValArr.join("");
        this.setState({
            inputVal: newString,
            inputLength: newString.length
        });
    };

    render() {
        const charGroupStyle = {         
            border: '2px solid #eee',
            padding: '25px',
            margin: '40px 10%',
            width: '80%'
        };

        let inputValArr = this.state.inputVal.split("");

        let charArr = inputValArr.map((inChar, index) => {
            return (<CharComponent 
                key={index} 
                inChar={inChar}
                charClicked={(event)=>this.charClickedHandler(event,index)}></CharComponent>)
        });

        return (
            <div className="App">
                <h1>User Input Validation</h1>
                <div>
                    <span> <input type="text" value={this.state.inputVal} onChange={this.inputTextChanged}/></span>
                </div>
                <div>
                    <Validator inputVal={this.state.inputVal} inputLength={this.state.inputLength}></Validator>
                </div>
                <div style={charGroupStyle}>
                    {charArr.length > 0 ? (<div>Click Any character to be deleted</div>): null}
                    {charArr}
                </div>
            </div>
        );
    }
}

export default App;
