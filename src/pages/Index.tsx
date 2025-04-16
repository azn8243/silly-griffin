import React, { useState, useEffect } from 'react';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import { Todo } from '@/types/todo';
import { v4 as uuidv4 } from 'uuid'; // Need to install uuid
import { toast } from "sonner";

const Index: React.FC = () => {
  // Load todos from local storage or start with an empty array
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    try {
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (e) {
      console.error("Failed to parse todos from localStorage", e);
      return [];
    }
  });

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    if (!text.trim()) {
        toast.error("Task cannot be empty.");
        return; // Prevent adding empty todos
    }
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    toast.success(`Task "${text}" added!`);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
     const toggledTodo = todos.find(todo => todo.id === id);
     if (toggledTodo) {
       toast.info(`Task "${toggledTodo.text}" marked as ${!toggledTodo.completed ? 'complete' : 'incomplete'}.`);
     }
  };

  const handleDeleteTodo = (id: string) => {
     const deletedTodo = todos.find(todo => todo.id === id);
     setTodos(todos.filter((todo) => todo.id !== id));
     if (deletedTodo) {
        toast.warning(`Task "${deletedTodo.text}" deleted.`);
     }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">My TODO List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default Index;