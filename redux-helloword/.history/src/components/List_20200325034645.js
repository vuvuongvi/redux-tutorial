import React from 'react';
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
                {this.state.mang.map(e => <Note/>)}
            </div>
        )
    }
}
module.exports = List;