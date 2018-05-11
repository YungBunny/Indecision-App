import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault(); //prevents full page refresh and takes in e for event, need to know what was submitted
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
            //wipes the input field after entering data
        }
    };
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input"type='text' name='option' />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}