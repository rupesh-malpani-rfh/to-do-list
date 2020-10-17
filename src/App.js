import React, { useState } from 'react';
import ToDo from './components/Todo'
import TodoForm from './components/TodoForm';

const App = () => {

  const [todo, setTodo] = useState([
    { title: 'Learning React', isComplete: false },
    { title: 'High priority issues', isComplete: false },
    { title: 'Code Merging', isComplete: false }
  ])

  const addTodo = title => {
    const newTitle = [...todo, { title }];
    setTodo(newTitle);
  }

  const toDoToggle = (index) => {
    const newTodo = [...todo]
    newTodo[index].isComplete = !newTodo[index].isComplete
    setTodo(newTodo)
  }

  const removeTodo = (index) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>To do List</h1>
      <div className="tdContainer">
        <TodoForm addTodo={addTodo} />
        <h3>{todo.length === 0 ? 'Please go on and add your To-Do items...' : ''}</h3>
        {todo.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            toDoToggle={toDoToggle}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
