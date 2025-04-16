import { useState } from 'react';
import { Todo } from '@/types/todo';

// Helper function to generate simple unique IDs (replace with a proper library like nanoid or uuid if needed for production)
const simpleId = () => '_' + Math.random().toString(36).substr(2, 9);


export const useTodos = (initialTodos: Todo[] = []) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    if (!text.trim()) return; // Don't add empty todos
    const newTodo: Todo = {
      id: simpleId(), // Generate a unique ID
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log("Added todo:", newTodo);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
     console.log("Toggled todo:", id);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
     console.log("Deleted todo:", id);
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};
