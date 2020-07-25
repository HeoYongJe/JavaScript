//배열(array)은 여러 개의 값을 순차적으로 나열한 자료 구조이다. 
const arr = ['apple', 'banana', 'orange'];
//배열이 가지고 있는 값을 요소(element)라고 부른다. 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.



//일반 객체와 배열을 구분하는 가장 명확한 차이는 “값의 순서”와 “length 프로퍼티”이다.
const arrr = [1, 2, 3];

// 반복문으로 자료 구조를 순회하기 위해서는 자료 구조의 길이를 알아야 한다.
for (let i = 0; i < arrr.length; i++) {
  console.log(arrr[i]); // 1 2 3
}


// 희소 배열
const sparse = [, 2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [empty, 2, empty, 4]


// Array.of
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
//Array.of 메소드는 전달된 인수를 요소로 갖는 배열을 생성한다.
const arr1 = Array.of(1);
console.log(arr1); // [1]

const arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

const arr3 = Array.of('string');
console.log(arr3); // ['string']



//Array.from
//Array.from 메소드는 유사 배열 객체(array-like object) 또는 이터러블 객체(iterable object)를 변환하여 새로운 배열을 생성한다.
// 문자열은 이터러블이다.
// const arr1 = Array.from('Hello');
// console.log(arr1); // ['H', 'e', 'l', 'l', 'o']

// // 유사 배열 객체를 새로운 배열을 변환하여 반환한다.
// const arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' });
// console.log(arr2); // ['a', 'b']



const macs = [
  { name: '2019 MacPro 16 MVVJ2KH/A', screen: 16, cpu: 'i7', ram: 16, ssd: 512, weight: 2, price: 2698000 },
  { name: '2019 MacPro 13 MV962KH/A', screen: 13.3, cpu: 'i5', ram: 8, ssd: 256, weight: 1.37, price: 1850000 },
  { name: '2019 MacPro 16 MVVM2KH/A', screen: 16, cpu: 'i9', ram: 16, ssd: 1000, weight: 2, price: 3161000 },
  { name: '2020 MacAir 13 MVH42KH/A', screen: 13.3, cpu: 'i5', ram: 8, ssd: 512, weight: 1.29, price: 1689000 },
  { name: '2019 MacPro 15 MV912KH/A', screen: 15.4, cpu: 'i9', ram: 16, ssd: 512, weight: 1.83, price: 2942000 },
];

// * 풀이 조건: for문으로 풀고, 배열 내장함수에 들어갈 함수는 함수 선언문으로 작성된 함수를 넣어라
// 1. 16인치 이상인 맥북의 이름을 모두 출력하라
// 2. rma이 8기가 이상인 맥북의 이름을 모두 출력하라

// 스크린이 16인치 이상이라면 노트북 이름을 모두 출력

const macArea = macs.forEach(mac);
console.log(macArea)

function mac(macs){
  if(macs.screen >= 16);
  console.log(macs.name)
};
return;


macs.forEach(mac => {
  if(macs.screen >= 16){
    console.log(macs.name >= 16);
  }
})
console.log(macs.name)


// for(let i = 0; i < macs.length; i++) {
//   if(macs[i].screen >= 16) {
//     console.log(macs[i].name);
//   };
// };



// const asd = function mac(){
//   if(macs.screen >= 16){
//     console.log(macs.name)
//   }
//   return macs.name
// }
// asd();

// function mac(){
//   if(macs.screen >= 16){
//     console.log(macs.name)
//   }
// };

// const macArea = macs.forEach(mac);
// console.log(macArea)


//2번문제
for(let i = 0; i < macs.length; i++) {
  if(macs[i].ram >= 8) {
    console.log(macs[i].name)
  };
};



const sizeUp = macs.filter(mac => mac.screen >= 16).map(mac => mac.name);
console.log(sizeUp)
const sizeUpName = macs
console.log(sizeUpName);



//고차함수
// 1.함수를 인자로 전달받거나 함수를 반환하는 함수를 말한다. 
// 2.외부 상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있다.
//1.요소 , 2. 인덱스 3. 배열
//foreach , map,every,sort,filter -> 대상을 처음부터 끝까지 돌기 때문에 무조건 앞쪽이 배열이여야한다


//sort
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort((a, b) => a - b); // 밑에 예시 , 1-2 = -1 이므로 1이 더 우선 
console.log(points); // [1, 2, 5, 10, 25, 40, 100]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1



//map
const numbers = [1, 4, 9];

function add(item){
  return Math.sqrt(item);  
}

console.log(numbers.map(add));   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]



//*제어문
// 삼항연산자로 바꿔쓰기
var num = -1;
// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수



const tat = [1,2]
const rec = tat.unshift(3,4);

console.log(rec)
console.log(tat)

const Queue = (function (){
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }
  // 큐의 가장 마지막에 데이터를 밀어넣는다
  Queue.prototype.push = function (value){
    return this.array.push(value);
  }
  Queue.prototype.unshift = function (value){
    return this.array.unshift(value)
  }
  return Queue;
}());

const queue = new Queue([01,2])
console.log(queue)
queue.push(3);
console.log(queue)
queue.unshift();
console.log(queue)



const arrrr = [1,2];
const arrrrr = [3,4];

let result1 = arrrrr.concat(arrrr)
console.log(result1)
console.log(arrrr.length) //2 ,원본배열 변하지 x

const bey = [1,2,3,4]
const bey1 = bey.splice(0,2,5);
console.log(bey1)
console.log(bey)



const arr4 = [1,2,3,4,5,6,7]
const result4 = arr4.includes(5,4);
console.log(result4)