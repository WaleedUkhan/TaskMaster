export function deleteTodo(id: string): Promise<void>;
export function updateTodo(id: string, isCompleted: boolean): Promise<void>;
export function addTodo(title: string): Promise<void>; 