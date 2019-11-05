import React from 'react';
import Todo from './Todo';
import '../App.css';

function TodoList (props) {

    return (
        <div className='todolist'>
            <div className='todoitems'>
                {props.todos.map(item => (
                <Todo key={item.id} todoItem={item} toggleCompleted={props.toggleCompleted} />
                ))}
            </div>
            <div className='todobutton'>
                <button className='button' type='submit' onClick={() => props.filterCompleted()}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoList;