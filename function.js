// 기명 즉시 실행 함수(named immediately-invoked function expression)
(function myFunction() {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  // 익명 즉시 실행 함수(immediately-invoked function expression)
let aaa =  (function () {
    var a = 3;
    var b = 5;
    return a * b;    
  }());
  console.log(aaa);
