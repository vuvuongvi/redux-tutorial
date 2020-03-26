import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
// import connect của component trong react từ store
import {connect} from 'react-redux';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    remove(index) {
        console.log(index);
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }
    addNote(note) {
        this.state.mang.push(note);
        this.setState(this.state)
    }
    render() {
        return (
            <div>
                <NoteForm handleAdd={this.addNote.bind(this)}/>
                {/* ở đây thay vì this.state thì là vì truyền vảo từ trong
                    redux nên ở đây nó biến thành props
                */}
                {this.props.mang.map((e, i) => <Note
                index={i} 
                handleRemove={this.remove.bind(this)}
                key={i}>{e}</Note>)}
            </div>
        )
    }
}
export default connect(function(state) {
    return {
        // ở đây là mình connect vào redux, sau đó mình sẽ lấy ra những cái state ở trong redux
        // ví dụ là state trong mảng
        mang: state.mang
    }
})(List);