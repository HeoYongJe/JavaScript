let date = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for(let i of date){
    sum += i;
}

console.log(sum)



//별찍기

for(let i = 0; i < 5; i++){
    let str = "";    
        for(let j = 0; j <= i; j++){
            str  = str + "*";
        }
        // str += "\n"
    console.log(str)    
}



//역삼각형 별찍기

for(let i = 5; i >= 1; i--){
    let str = "";    
        for(let j = 1; j <= i; j++){
            str  = str + "*";
        }
        // str += "\n"
    console.log(str)    
}
