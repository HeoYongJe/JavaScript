let point = {x:1,y:2};

"x" in point;
"z" in point;
"toString" in point;
console.log(point.z)
console.log(typeof(point.y))

let date = [4,5,6];

"0" in date;
1 in date;

console.log(date)

let d = new Date();
d instanceof Date;
console.log(d)

let add = new Function('x','y','return x + y');

console.log(add(1,2))


function foo() {

    const a = 1;
    const b = 2;

    function bar(){
        console.log(a);
    }
    return bar;
}

const bar = foo();

foo()