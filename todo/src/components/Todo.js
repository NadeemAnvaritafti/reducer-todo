import React, {useReducer} from 'react';
// import {initialState, reducer} from '../reducers/reducer';
import '../App.css';


function Todo (props) {

    // const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <div 
            className={`item${props.todoItem.completed ? ' completed' : ''}`} 
            // onClick={() => props.toggleCompleted(props.todoItem.id)}
            onClick={()=> props.toggleCompleted(props.todoItem.id)}
            >
                <p>{props.todoItem.task}</p>
            
            </div>
        )
}

export default Todo;