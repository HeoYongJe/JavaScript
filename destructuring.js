// 배열 디스트럭처링 
let arr = [1,2,3];

let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a,b,c) //1,2,3

const arr2 = [1,2,3];
const [one,two,three] = arr2;
console.log(one,two,three) //1,2,3
//추출/할당 기준은 배열의 인덱스



//객체 디스트럭처링
const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
  ];

const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos);