import React, {Component} from 'react';

class FormTest extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }

        //bind the "this" keyword for method handleNameChange,
        //so the method has access to "this" for class FormTest
        this.handleNameChange = this.handleNameChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        //browser posting request back to server(causing browser to refresh) if not used,
        e.preventDefault();
        this.props.addName(this.state.value);
        
    }

    render() {
        //console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleNameChange}
                    placeholder="Enter name"
                />

                <input 
                    type="submit"
                    value="Send"
                />
            </form>
        );
    }
}

export default FormTest;
