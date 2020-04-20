//연산자

//이항 산술 연산자는 부수효과가 없다
5 + 2; // -> 7
5 - 2; // -> 3
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1



//단항 산술 연산자 
//(++/--)는 위치에 의미가 있으며, 위치에 따라 피연산자의 값을 변경하는 부수효과가 있다.
var x = 5, result;

// 선할당 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5 



//할당연산자
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = 'My name is ';

// 문자열 연결 연산자
str += 'Lee'; // str = str + 'Lee';

console.log(str); // 'My name is Lee'



//동등 / 일치 비교 연산자
//== 동등비교 / x == y / x와 y의 값이 같음
//=== 동등비교 / x === y / x와 y의 값이 같음
//!= 동등비교 / x == y / x와 y의 값이 다름
//!== 동등비교 / x === y / x와 y의 타입이 다름

// 동등 비교
5 == 5; // -> true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == '5'; // -> true

// 일치 비교
5 === 5; // -> true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === '5'; // -> false



// **NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // -> false



//삼항 조건 연산자
조건식 ? 조건식이 true일때 반환할 값 : 조건식이 false일때 반환할 값
var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수



//논리연산자
//논리합은 둘중 하나만 true이면 true를 반환한다.
//논리곱은 둘다 true이여야 true를 반환한다. 
// 논리합(||) 연산자
true || true;   // -> true
true || false;  // -> true
false || true;  // -> true
false || false; // -> false

// 논리곱(&&) 연산자
true && true;   // -> true
true && false;  // -> false
false && true;  // -> false
false && false; // -> false

// 논리 부정(!) 연산자
!true;  // -> false
!false; // -> true