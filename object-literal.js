//객체는 변경 가능한 값(mutable value)이다.
//객체는 0개 이상의 프로퍼티의 집합이며 프로퍼티는 키(key)와 값(value)으로 구성된다.
//프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
//프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

//식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용하여야 한다. 
var person = {
    firstName: 'Ung-mo', // 유효한 이름
    'last-name': 'Lee'   // 유효하지 않은 이름
  };
  
  console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}