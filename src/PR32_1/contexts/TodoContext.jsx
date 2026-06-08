import { createContext, useState } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoItems] = useState([
    { id: 1, text: 'Belajar React' },
    { id: 2, text: 'Buat Project' },
  ]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const selectTodo = (id) => {
    setSelectedTodoId(id);
  };

  return (
    <TodoContext.Provider value={{ todoItems, selectedTodoId, selectTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoContext};