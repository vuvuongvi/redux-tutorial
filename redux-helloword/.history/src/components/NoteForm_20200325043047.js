import React from 'react';
class NoteForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter your text" ref="txt"></input>
            </form>
        )
    }
}
export default NoteForm;