export async function getTask(taskId) {
  const response = await fetch(`/tasks/${taskId}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const task = await response.json();

  return task;
}
