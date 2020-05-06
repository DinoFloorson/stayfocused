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

export async function patchTask({ taskId, fields }) {
  const response = await fetch(`/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fields),
  });

  const task = await response.json();
  return task;
}

export async function addTask({ fields }) {
  const response = await fetch(`/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fields),
  });
  const task = await response.json();
  return task;
}

export async function deleteTask(taskId) {
  const response = await fetch(`/tasks/${taskId}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const task = await response.json();

  return task;
}
