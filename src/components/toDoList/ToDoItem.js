import React, {useState} from 'react';
import deleteButtonSVG from '../../delete-button.svg';

import './toDoItem.css';

export default function Contact(props) {
    const [done, setDone] = useState(props.done)

    const handleDone = () => {
        setDone(!done)
    }

    
    const { toDoText } = props;

    return (
        <div className="toDoComponent">
            <button className="button" onClick={() => handleDone()}>
                <svg className={"deleteButtonImage " + (done ? "doneCheck" : "standartCheck")} viewBox="0 0 24 24" aria-hidden="true" title="fontSize large"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
            </button>
            <div className={"toDoText " + (done ? "doneText doneElement" : "standartText")}>
                {toDoText}
            </div>
            <button className="button" onClick={() => props.delete(props.id)}>
                x
            </button>
        </div>
    )
    
}