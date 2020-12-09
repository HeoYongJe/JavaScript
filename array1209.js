//slice()
let s = [1,2,3,4,5];
console.log(s.slice(0,1))

let ss = [1,3,5,7,9];
console.log(ss.splice(1,0,'4'))

let a = [3,5,2,8,11,1];
a.sort(function(a,b){
    return a-b;
});
console.log(a)

let ab ;
ab = a.slice(0,4);
console.log(ab)
console.log(a)//원본배열 변경x 

let b = {};
let i = 0;
while(i < 10){
    b[i] = i*i;
    i++;
}
console.log(b)

let total = 0;
    for(let i = 0; i < b.length; i++){
        total += b[i];
        console.log(total)
    }
