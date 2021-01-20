//tdz = Temporal Dead Zone
// let, const, class 구문의 유효성을 관리
//var, function 선언은 TDZ에 영향을 받지 않는다. (스코프에서 호이스팅 된다)

a; // ReferenceError
let a = 1;
a; //1