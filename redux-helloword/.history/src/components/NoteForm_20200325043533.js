import React from 'react';
class NoteForm extends React.Component {
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