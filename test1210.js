function square(x){
    return x * x ;
}
let s = square;
console.log(s)
console.log(square(4))
console.log(s(4))

//객체 안

let o1 = {
    square: function(x){
        return x * x;
    }
}
console.log(o1.square(4));

let arr = [
    x => x * x, 20
];

let arr2 = arr[0];
console.log(arr[1])

let scpoe = "global";
function checkscope(s){
    let scope = "local";
    function f() {return s + " " + " " + scope; }
    return f
}
let f = checkscope()();
console.log(f)


//rest  -> 나머지 arguments를 배열로 
const add = (a,b, ...rest) => {
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [5,7,4,22,4]
}
add(1,2,5,7,4,22,4);


//spread 배열 문자열 등의 이터러블을 분해해서 개별 요소로 만듬

const spr = [1,2,3];
console.log(spr);
console.log(...spr) // 1 2 3

const spr2 = [4,5,6];
const spr3 = '7';
console.log(...spr, ...spr2, ...spr3) // 1 2 3 4 5 6 '7'



//선택적 매개변수
function getPropertyNames(o,a){
    if(a === undefined){
        a = [];
    }
    for(let property in o){
        a.push(property);
    }
    return a;
}
let o = {x:1}, p = {y:2,z:3};
let a = getPropertyNames(o);
a
let b = getPropertyNames(p,a);
b