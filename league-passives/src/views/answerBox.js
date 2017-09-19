import React from 'react';

var Answerbox = (props) => {
    return (
        <div>
            <form onSubmit={props.checkAnswer}>
                <input id ="answer" type="text" defaultValue={props.answer}/>
            </form>
        </div>
    );
};

export default Answerbox;