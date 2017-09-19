import React from 'react';

class Passiveview extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <img src = {this.props.passiveUrl} alt=""/>
            </div>
        );
    }
}

export default Passiveview;