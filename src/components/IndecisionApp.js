import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    
    //lifecycle methods fire at various times during a component's lifestyles, 
    //only available in class based components, not state based components
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove != option)
        }));
    };
    handlePick = () => {
        const option = (this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            //fetches the array and parses it back into our options array

            if (options) {
             this.setState(() => ({ options }));
             //data remains on the screen because setState as we return the object
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            //json, javascript object notation, can be used for objects for localStorage
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <div className="widget">
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

// before converting from ES6 methods to class properties:
// (class based components -> class properties syntax)
// great for our event handlers, usually have a problem maintaining this binding-- not a problem with arrow functions
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // }

    // another example

    // class OldSyntax {
    //     constructor() {
    //         this.name = 'Chanel';
    //         this.getGreeting = this.getGreeting.bind(this);
    //     }
    //     getGreeting() {
    //         return `Hi. My name is ${this.name}.`;
    //     }
    // }
    // const oldSyntax = new OldSyntax();
    // const getGreeting = oldSyntax.getGreeting;
    // console.log(getGreeting());
    
    // class NewSyntax {
    //     name = 'Jenn';
    //     getGreeting = () => {
    //         return `Hi. My name is ${this.name}.`;
    //     }
    // }
    // const newSyntax = new NewSyntax();
    // const newGetGreeting = newSyntax.getGreeting;
    // console.log(newGetGreeting());