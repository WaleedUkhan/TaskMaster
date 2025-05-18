import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";
import AddTodo from "@/components/todos/AddTodo";

async function getData() {
  const data = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function TodosPage() {
  const data = await getData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Your Tasks
        </h1>
        
        <AddTodo />
        
        <div className="mt-8 space-y-4">
          {data.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No tasks yet. Add your first task above!
              </p>
            </div>
          ) : (
            data.map((todo) => (
              <div key={todo.id} className="animate-slide-up">
                <Todo todo={todo} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 