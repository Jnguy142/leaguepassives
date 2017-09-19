import React from 'react';

var Userstatus = ({username, score, setUser}) => {
    return (
        <div>
            <h1>username: <form onSubmit={setUser}><input id="username" type="text" defaultValue={username}/></form></h1>
            <h1>score: {score}</h1>
        </div>
    );
};

export default Userstatus;