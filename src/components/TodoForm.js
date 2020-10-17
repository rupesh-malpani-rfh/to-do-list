import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    value={value}
                    placeholder="Add to-do title..."
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoForm;