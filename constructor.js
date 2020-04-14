//Object 생성자 함수
//new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있다.

// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee

//생성자(constructor) 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 한다



//생성자 함수
//객체 리터럴에 의한 객체 생성 방식의 문제점
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};
  
  console.log(circle1.getDiameter()); // 10
  
const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
};
  
console.log(circle2.getDiameter()); // 20
//원을 표현한 객체인 circle1 객체와 circle2 객체는 프로퍼티 구조가 동일하다. 단, 객체 고유의 상태 데이터인 radius 프로퍼티의 값은 객체마다 다를 수 있지만 getDiameter 메소드는 완전히 동일하다.
//하지만 객체 리터럴에 의해 객체를 생성하는 경우, 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메소드를 기술해야 한다. 위 예제처럼 객체가 한두개라면 넘어갈 수도 있겠지만 만약 수십개의 객체를 생성해야 한다면 문제가 크다.



//생성자 함수에 의한 객체 생성 방식의 장점
// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성
  
console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20