import React, { useState } from 'react';
import Contact from './ToDoItem';
import toDoMoqArray from '../../mocqData/toDoItems';

import './toDoList.css';

export default function ContactsList(){
    const [toDoArray, changeArray] = useState(toDoMoqArray())
    const [text, changeText] = useState("")

    const onDelete = (id) => {
        const newArray = [...toDoArray]
        newArray.splice(id, 1)

        changeArray(newArray)
    }

    const handleInput = (newText) => {
        changeText(newText)
    }

    const handleAddElement = () =>{
        changeArray(toDoArray.concat([{
            toDoText: text,
            done: false
        }]))
    }

    return (
        <div className="tasks">
            <input style={{width:"400px"}} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={() => handleAddElement()}>
                Add
            </button>
            <div className="tasksList">
                {toDoArray.map((element, id) => (
                    <Contact 
                        toDoText={element.toDoText}
                        done={element.done}
                        delete={onDelete}
                        id={id}
                    />
                ))}
            </div>
        </div>
    )
}