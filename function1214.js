//값으로서의 함수

function square(x) {
    return x*x;
}

let s = square;
console.log(square(4));
console.log(s(4))


//객체 속성에 저장
let o = {square: function(x){return x*x}};
let y = o.square(4);
console.log(y)


//배열 요소에 저장
let a = [x => x*x,20]
console.log(a[0](a[1]))


