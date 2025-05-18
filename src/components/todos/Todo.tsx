'use client';

import { useState } from 'react';
import { FiTrash2, FiCheck, FiClock } from 'react-icons/fi';
import { deleteTodo, updateTodo } from '@/actions/todoActions';

interface TodoProps {
  todo: {
    id: string;
    title: string | null;
    isCompleted: boolean;
    createdAt: Date;
  };
}

const Todo = ({ todo }: TodoProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteTodo(todo.id);
  };

  const handleToggle = async () => {
    await updateTodo(todo.id, !todo.isCompleted);
  };

  return (
    <div
      className={`group flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:shadow-md ${
        isDeleting ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={handleToggle}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            todo.isCompleted
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 dark:border-gray-500 hover:border-indigo-500 dark:hover:border-indigo-400'
          }`}
        >
          {todo.isCompleted && <FiCheck className="w-4 h-4" />}
        </button>
        
        <div className="flex flex-col">
          <span
            className={`text-lg font-medium ${
              todo.isCompleted
                ? 'text-gray-500 dark:text-gray-400 line-through'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {todo.title}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <FiClock className="w-4 h-4 mr-1" />
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 opacity-0 group-hover:opacity-100"
        disabled={isDeleting}
      >
        <FiTrash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Todo;
