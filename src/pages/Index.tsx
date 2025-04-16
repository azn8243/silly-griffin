import { useTodos } from '@/hooks/useTodos';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';

const Index = () => {
  // Example initial todos - remove or modify as needed
  const initialTodos = [
      { id: 'init1', text: 'Review shadcn/ui components', completed: true },
      { id: 'init2', text: 'Build the TODO list UI', completed: false },
      { id: 'init3', text: 'Add state management', completed: false },
  ];
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos(initialTodos);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-screen pt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My TODO List</h1>
      <div className="w-full max-w-md">
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default Index;
