//Math는 생성자 함수가 아니다. 따라서 Math는 정적(static) 프로퍼티와 메소드만을 제공한다.



//Math.abs()
//전달받은 인수의 절댓값을 반환한다. 절댓값은 반드시 0 또는 양수이어야 한다.
Math.abs(-1); // -> 1
Math.abs('-1'); // -> 1
Math.abs(''); // -> 0
Math.abs([]); // -> 0



//Math.round()
//전달받은 인수의 소수점 이하를 반올림한 정수를 반환한다
Math.round(1,4); // -> 1
Math.round(); // -> NAN



//Math.ceil()
Math.ceil(1.4) // 2
Math.ceil(-1.4) // -1
Math.ceil(1) // 1
Math.ceil(); // NaN



//Marh.floor()
//전달받은 인수의 소수점 이하를 내림한 정수를 반환한다. Math.ceil의 반대 개념이다.
Math.floor(1.9);  // -> 1
Math.floor(9.1);  // -> 9
Math.floor(-1.9); // -> -2



//Math.max()
//전달받은 인수 중에서 가장 큰 수를 반환한다
Math.max(1,2,3); // 3

const arr = [1,2,3]
Math.max(...arr) // 3



//Math.min() / max의 반대로 인수 중에서 가장 작은 수를 반환한다
Math.min(1,2,3); // 1


