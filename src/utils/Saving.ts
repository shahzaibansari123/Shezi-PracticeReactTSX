export const Saving = (todos: TodoItemType[]): void => {
  localStorage.setItem("saved", JSON.stringify(todos));
};

export const Fetching = (): TodoItemType[] => {
  const data = localStorage.getItem("saved");

  return data ? JSON.parse(data) : [];
};
