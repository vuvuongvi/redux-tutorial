import React from 'react';
import Note from './Note';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ['Android', 'iOS', 'Nodejs']
        };
    }
    remove(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }
    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => <Note 
                handleRemove={this.remove}
                key={i}>{e}</Note>)}
            </div>
        )
    }
}
export default List;