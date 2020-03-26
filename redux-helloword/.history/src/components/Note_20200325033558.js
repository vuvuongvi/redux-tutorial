import React from 'react';
class Note extends React.Component {
    render() {
       return (
           <div>
               <p>{this.props.children}</p>
           </div>
       )
    }
}
module.exports = Note