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
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ];

const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); //[{id: 2, content: 'CSS', completed: true}]
//필요한 프로퍼티(completed 프로퍼티)만을 추출



//Map 객체를 순회할 때 일련의 페어를 얻는데, 이 페어를 디스트럭처링하면 키와 밸류에 쉽게 접근 가능
var map = new Map();
map.set(window, "the global");
map.set(document, "the document");

for (var [key, value] of map) {
  console.log(key + " is " + value);
}

for (var [key] of map) {
    // 순회하면서 키(keys) 값에만 접근하는 코드
}

for (var [,value] of map) {
  // 밸류(value) 값에만 접근하는 코드
}