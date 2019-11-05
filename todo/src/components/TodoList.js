import React, {useState, useReducer} from 'react';
// import {initialState, reducer} from '../reducers/reducer';
import Todo from './Todo';
import '../App.css';

function TodoList (props) {

    // const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    return (
        <div className='todolist'>
            <div className='todoitems'>
                {props.todos.map(item => (
                <Todo key={item.id} todoItem={item} toggleCompleted={props.toggleCompleted} />
                ))}
            </div>
            <div className='todobutton'>
                <button className='button' onClick={() => props.filterCompleted()}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoList;