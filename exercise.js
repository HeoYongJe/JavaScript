var num = 2;
var kind;

if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';

console.log(kind);
//코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.

var x = 0;
var xyz = x ? (x > 0 ? '양수' :'음수') : '영';
console.log(xyz);

var month = 2;
var monthName;

switch(month) {
  case 1: monthName = 'january'
  //break;
  case 2: monthName = 'february'
  //break;
  default: monthName = 'no month';
}
console.log(monthName);
//break를 쓰지 않았기 때문에 swicth를 탈출하지 않고 연이어 'no month' 가 재할당 되었기 때문이다.


var button = document.getElementById('myButton');

button.addEventListener('click' , function() {
  console.log(this === button);
  this.innerHTML = 'Clicked button';
});
//addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리킨다.
//따라서 addEventListener 함수의 콜백 함수 내에서 this를 사용할 경우 function 키워드로 정의한 일반 함수를 사용하여야 한다.
