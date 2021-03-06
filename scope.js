function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부이다.
  console.log(x, y); // 2 5
  return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//console.log(x, y); // ReferenceError: x is not defined



var sc = 'global';

function foo() {
  var sc = 'local';
  console.log(sc); // ①
}

foo();

console.log(sc); // ②



//식별자는 어떤 값을 구별할 수 있어야 하므로 유일(unique)해야 한다. 따라서 식별자인 변수 이름은 중복될 수 없다. 즉, 하나의 값은 유일한 식별자에 연결(Name binding)되어야 한다.
//스코프(유효 범위)를 통해 식별자인 변수 이름의 충돌을 방지하여 같은 이름의 변수를 사용할 수 있도록 한다. 스코프 내에서 식별자는 유일해야 하지만 다른 스코프에는 같은 이름의 식별자를 사용할 수 있다.
// * var는 같은 스코프 내에 중복선언을 허용하나 let , const 는 같은 스코프 내에 중복선언을 허용하지 않는다

//전역이란 코드의 가장 바깥 영역을 말한다. 전역은 전역 스코프(global scope)를 만든다. 전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수(global variable)가 된다. 전역 변수는 어디서든지 참조할 수 있다.
//지역이란 함수 몸체 내부를 말한다. 지역은 지역 스코프(local scope)를 만든다. 지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수(local variable)가 된다. 지역 변수는 자신이 선언된 지역과 하위 지역(중첩 함수)에서만 참조할 수 있다. 다시 말해 지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

//*렉시컬 환경(Lexical Environment)
//스코프 체인은 실행 컨텍스트(Execution Context)의 렉시컬 환경(Lexical Environment)을 단방향으로 연결(Channing)한 것이다. 전역 렉시컬 환경은 코드가 로드되면 곧바로 생성되고 함수의 렉시컬 환경은 함수가 호출되면 곧바로 생성된다.



//함수 레벨 스코프
//지역은 함수 몸체 내부를 말하고 지역은 지역 스코프를 만든다고 했다. 이는 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다는 의미이다.



var i = 10;

// for문에서 선언한 i는 전역 변수이다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5



//렉시컬 스코프



var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?

// 1.함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.
// 2.함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다.

//* 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다. 
//즉 모든 함수 정의는 평가되어 함수 객체를 생성할 때, 자신이 정의된 스코프를 상위 스코프로서 기억한다
