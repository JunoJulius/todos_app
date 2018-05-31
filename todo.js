const todoData = [
  'write',
  'draw',
  'build app',
  'shower',
]

let todoList = document.getElementById('todoList');

for (var i = 0; i < todoData.length; i++) {
  let newListItem = document.createElement("li");
  let newContent = document.createTextNode(todoData[i]);

  newListItem.appendChild(newContent);
  todoList.appendChild(newListItem);
}
