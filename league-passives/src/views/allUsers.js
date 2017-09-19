import React from 'react';
import Userentry from './userEntry.js';

class Allusers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Userentry />
            <button type="button">Get All Users</button>
            </div>
        ); 
    }
}

export default Allusers;