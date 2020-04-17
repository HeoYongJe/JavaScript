//전역 변수의 문제점
// 전역 변수의 생명 주기는 애플리케이션의 생명 주기와 같다. 하지만 함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다
function foo() {
  var x = 'local';
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError: x is not defined
// foo 함수를 호출하면 함수 몸체의 다른 문들이 순차적으로 실행되기 이전에 변수 x의 선언문이 자바스크립트 엔진에 의해 가장 먼저 실행되어 변수 x가 선언되고 undefined로 초기화된다.
//그 후, 함수 몸체의 문들이 순차적으로 실행되기 시작하고 변수 할당문이 실행되면 변수 x에 값이 할당된다. 그리고 함수가 종료하면 변수 x도 소멸되어 생명 주기가 종료된다. 
//따라서 함수 내부에서 선언된 지역 변수 x는 foo 함수가 호출되어 실행되는 동안에만 유효하다. 즉, 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다.



//암묵적 결합
//전역 변수를 선언한 의도는 전역, 즉 코드 어디에서든지 전역 변수를 사용하겠다는 것이다
//이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합(implicit coupling)을 허용하는 것이며
//변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다



//네임 스페이스 오염
//자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다하여도 하나의 전역 스코프를 공유한다는 것이다
//따라서 다른 파일 내에서 동일한 이름으로 명명된 변수나 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다



//전역 변수 사용 억제 방법
//무분별한 전역변수는 위험하며, 전역 변수를 반드시 사용하여야 할 이유를 찾지 못한다면 지역 변수를 사용하여야 한다

