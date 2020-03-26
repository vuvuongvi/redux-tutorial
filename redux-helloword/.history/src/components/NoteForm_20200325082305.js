import React from 'react';
class NoteForm extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.refs.txt.value);
        this.refs.txt.value = '';
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Enter your text" ref="txt"></input>
                <br></br>
                <button>Add</button>
            </form>
        )
    }
}
export default NoteForm;