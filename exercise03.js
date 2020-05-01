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



