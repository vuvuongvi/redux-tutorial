import React from 'react';
import {connect} from 'react-redux';
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.refs.txt.value);
        this.refs.txt.value = '';
        this.toggle();
    }
    toggle(e) {
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
    }
    render() {
        if(this.props.isAdding) {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Enter your text" ref="txt"></input>
                    <br></br>
                    <button>Add</button>
                </form>
            )
        }
        return <button onClick={this.toggle.bind(this)}>+</button>
    }
}
export default connect(function(state) {
    return {
        isAdding: state.isAdding
    }
})(NoteForm);