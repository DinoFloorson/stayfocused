export async function getTask(taskId) {
  const response = await fetch(`/tasks/${taskId}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const task = await response.json();

  return task;
}
export async function getAllTasks() {
  const response = await fetch(`/tasks/`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const tasks = await response.json();

  return tasks;
}
