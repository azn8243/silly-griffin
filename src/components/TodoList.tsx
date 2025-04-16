import React from 'react';
import { Todo } from '@/types/todo';
import TodoItem from './TodoItem';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {

  return (
     <Card className="w-full max-w-md mt-4">
        <CardHeader className="pb-3">
            <CardTitle className="text-lg">Your Tasks</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
             {todos.length === 0 ? (
                <p className="text-muted-foreground p-6 text-center text-sm">No tasks yet. Add one above!</p>
             ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))
             )}
        </CardContent>
     </Card>
  );
};

export default TodoList;
