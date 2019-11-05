import React, {useState, useReducer} from 'react';
// import {initialState, reducer} from '../reducers/reducer';
import '../App.css';

function TodoForm (props) {

    // const [state, dispatch] = useReducer(reducer, initialState);
    const [newItem, setNewItem] = useState('');

    const changeHandler = e => {
        setNewItem(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addTodo(newItem);
        setNewItem('');
    }

        return (
            <div>    
                <form onSubmit={submitHandler}>
                    <input 
                        type='text' 
                        name='item' 
                        placeholder='What do you need to do?' 
                        value={newItem} 
                        onChange={changeHandler}
                        >
                    </input>
                    
                    <div className='buttonDiv'>
                        <button 
                            className='button' 
                            type='submit' 
                            >
                            Add to List
                        </button>
                    </div>
                </form>
            </div>
        )
}

export default TodoForm;