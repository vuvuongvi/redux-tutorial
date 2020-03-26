import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from '../actions/action'
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.handleAdd(this.refs.txt.value);   
        // this.refs.txt.value = '';
        // this.toggle();
        let {dispatch} = this.props;
        // dispatch({type: 'ADD_ITEM', item: this.refs.txt.value});
        // dispatch({type: 'TOGGLE_IS_ADDING'});
        // day la lay tu thang action ra ne
        dispatch(addItem(this.refs.txt.value));
        dispatch(toggle())
    }
    toggle(e) {
        //dispatch trong component
        let {dispatch} = this.props;
        dispatch({type: 'TOGGLE_IS_ADDING'})
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
// export default NoteForm