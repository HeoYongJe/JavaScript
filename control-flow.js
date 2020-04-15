//제어문(Control flow statement)은 주어진 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다. 일반적으로 코드는 위에서 아래 방향으로 순차적으로 실행된다. 
//블록문(Block statement/Compound statement)는 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다.
//일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반적이다.

// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x); // 10

// 함수 선언문
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // 3



//조건문(conditional statement)은 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블럭(블록문)의 실행을 결정하며, 자바스크립트는 2가지의 조건문 if…else 문과 switch 문을 제공한다.
if (조건식1) {
  // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
  // 조건식2이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}



var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if…else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if…else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수



//if...else 삼항연산자로 변환하기
// x가 짝수이면 문자열 '짝수'를 반환하고 홀수이면 문자열 '홀수'를 반환한다.
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
  result = '홀수';
} else {
  result = '짝수';
}

console.log(result); // 짝수


// x가 짝수이면 문자열 '짝수'를 반환하고 홀수이면 문자열 '홀수'를 반환한다.
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
// 0은 false로 취급된다. 세가지의 경우) var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(result); // 짝수