const todoItems = [
  'write',
  'draw',
  'build app',
  'shower'
]

let todoList = document.createElement("ol");

todoItems.forEach(function(item, index){
  let listItem =document.createElement("li");
  let todoText = document.createTextNode(`${index}. ${item}`);
  listItem.appendChild(todoText)
  todoList.appendChild(listItem)
  console.log(listItem)
})


console.log(todoList);
