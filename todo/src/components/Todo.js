import React from 'react';
import '../App.css';


function Todo (props) {
        return (
            <div className={`item${props.todoItem.completed ? ' completed' : ''}`} onClick={() => props.toggleCompleted(props.todoItem.id)}>
                <p>{props.todoItem.task}</p>
            </div>
        )
}

export default Todo;