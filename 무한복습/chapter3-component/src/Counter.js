const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
];

console.log(array);

const newArray = array.concat({ id: 4 });

console.log(newArray);

const filter = newArray.filter((item) => item.id !== 2);
console.log(filter);

const map = newArray.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
);

console.log(map);
