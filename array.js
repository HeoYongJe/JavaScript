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

// i = 0 은 초기값, 1번문제
// for(let i = 0; i < macs.length; i++) {
//   if(macs[i].screen >= 16) {
//     console.log(macs[i].name);
//   };
// };
macs.forEach(function mac(item,i,arr){
  return i;
}); // ??????


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




