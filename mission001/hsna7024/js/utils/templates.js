export const todoListTemplate = (todo, index) => {
  const contentHtmlString = `<div class="view"> 
  <input class="toggle" type="checkbox" ${todo.isCompleted ? "checked" : ""}>
  <label class="label">${todo.content}</label>
  <button class="destroy"></button></div>
  <input class="edit" value="${todo.content}">`;
  const completedClassName = todo.isCompleted ? `class = "completed"` : "";
  const editingClassName = todo.onEdit ? `class = "editing"` : "";

  return `<li ${completedClassName} ${editingClassName} data-id="${index}">${contentHtmlString}</li>`;
};

export const todoFilterTemplate = () => {
  `<li>
    <a class="all selected" href="#/">전체보기</a>
  </li>
  <li>
    <a class="active" href="#/active">해야할 일</a>
  </li>
  <li>
    <a class="completed" href="#/completed">완료한 일</a>
  </li>`;
};
