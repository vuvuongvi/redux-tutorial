import React from 'react';
import Note from './Note';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ['Android', 'iOS', 'Nodejs']
        };
    }
    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => <Note>{e}</Note>)}
            </div>
        )
    }
}
module.exports = List;