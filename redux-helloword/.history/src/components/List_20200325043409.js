import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ['Android', 'iOS', 'Nodejs']
        };
    }
    remove(index) {
        console.log(index);
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }
    render() {
        return (
            <div>
                <NoteForm handleAdd={this.add.bind(this)}/>
                {this.state.mang.map((e, i) => <Note
                index={i} 
                handleRemove={this.remove.bind(this)}
                key={i}>{e}</Note>)}
            </div>
        )
    }
}
export default List;