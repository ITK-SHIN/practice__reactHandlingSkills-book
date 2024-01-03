const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

console.log(todos);

nextTodos[0].checked = false;
console.log(todos);

console.log(nextTodos);
