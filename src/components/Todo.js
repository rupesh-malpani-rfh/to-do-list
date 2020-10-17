import React from 'react';

const ToDo = ({ todo, index, toDoToggle, removeTodo }) => {
    return (
        <div className="todoListContainer">
            <span className="todo" style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
                {todo.title}
            </span>

            <span style={{ marginRight: '2%', cursor: 'pointer' }}>
                <i
                    className={`${!todo.isComplete ? 'fas fa-square' : 'fas fa-check-square'}`}
                    onClick={() => toDoToggle(index)}>

                </i>
            </span>
            <span style={{ cursor: 'pointer' }}>
                <i className="fas fa-trash-alt" onClick={() => removeTodo(index)}></i>
            </span>
        </div>
    )
}

export default ToDo;