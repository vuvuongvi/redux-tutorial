import React from 'react';
class Note extends React.Component {
    removeNote() {
        
    }
    render() {
       return (
           <div>
               <p>{this.props.children}</p>
               <button onClick={this.removeNote.bind(this)}>Delete</button>
           </div>
       )
    }
}
export default Note;