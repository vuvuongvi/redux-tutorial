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
        
    }
    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => <Note key={i}>{e}</Note>)}
            </div>
        )
    }
}
export default List;