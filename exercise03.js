var score = 10;
var copy = score;

console.log(score);
console.log(copy);

score = 20;
console.log(score);
console.log(copy)
// 값에 의한 전달

var person = {
    name: 'heo'
}
console.log(person)
person.age = 20;
person.name = 'lee'
console.log(person);

//  객체는 변경 가능한 값, 재할당 및 추가,삭제 가능

var person1 = {
    name: 'lee'
};

var person2 = {
    name: 'lee'
};
console.log(person1 === person2); // 값에 의한 전달 false
console.log(person1.name === person2.name) // 참조에 의한 전달 true



function Student(name, math, english) {
    // 속성
    this.이름 = name;
    this.수학 = math;
    this.영어 = english;

    // 메서드
    this.getSum = function () {
        return this.수학 + this.영어;
    }
}

var student1 = new Student('이광기', 70, 80);
console.log(student1)
console.log(student1.getSum)

var x = 15;
// 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.
if (x > 10 || x < 20 ) {
  console.log(x);
}

for(var i=0;i < 10; i++){
    if(i % 2 === 0)console.log(i)
}

var str = '';
for(var i=0;i < 10; i++){
    if(i % 2 === 0) str += i;
}
console.log(str)

for(var i=2; i<3; i++) {
    console.log(i + '단');
    for(var j=1; j<10; j++) {
    console.log(i + ' X ' + j + ' = ' + i*j);
    }
}

//1. 패캠에서 게임을 제작하려고 한다. 게임 캐릭터 중 적 캐릭터를 객체 리터럴로 만드시오.
//(프로퍼티는 HP, ATK(공격력), DEF(방어력)을 가지고 있다)

let status= {
    HP:'체력',
    ATK:'공격력',
    DEF:999
}
console.log(status)

//2. 원거리 공격을 하는 적 캐릭터와 근거리 공격을 하는 적으로 캐릭터 타입을 나누려고 한다.
//1번에서 만든 객체에 동적으로 프로퍼티를 추가하시오(프로퍼티 키는 type이다)

status.type1 = {
    type1:'원거리',
    HP:50,
    ATK:50,
    DEF:100
}
status.type2 = {
    type2:'근거리',
    HP:30,
    ATK:80,
    DEF:600
}

console.log(status.type1)
console.log(status.type2)
console.log(status)


//요소로 0, 1, 2, 3, 4, 5 를 가진 배열을 만들어라
let arr = [1,3,5,7,9];
console.log(arr);

console.log([2])
