import React from 'react';
import { Todo } from '@/types/todo';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const uniqueId = `todo-${todo.id}`;
  return (
    <div className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-muted/50 transition-colors">
       <div className="flex items-center space-x-3">
         <Checkbox
            id={uniqueId}
            checked={todo.completed}
            onCheckedChange={() => onToggle(todo.id)}
            aria-labelledby={`${uniqueId}-label`} // Associate checkbox with label for accessibility
         />
         <Label
            id={`${uniqueId}-label`} // ID for association
            htmlFor={uniqueId} // Ensures clicking label toggles checkbox
            className={cn(
              "flex-grow cursor-pointer text-sm",
              todo.completed && "line-through text-muted-foreground"
            )}
         >
            {todo.text}
         </Label>
       </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete task: ${todo.text}`}
        className="text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
