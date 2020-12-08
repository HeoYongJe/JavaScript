let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(a => a + 5).filter(a => a > 5);
console.log(arr2)

console.log('log1:'+txt);

if (true) {
  var txt = 'text';
  console.log('log2:'+txt);
}

console.log('log3:'+txt);


//함수호이스팅
b();

function b(){
  console.log('hyj');
}
//위 내용을 보면 호출이 먼저 되었지만 함수 선언은 최상단으로 끌어 올려지기 때문에(호이스팅) 정상적으로 동작한다


//변수호이스팅
if(true){
    let a = 'hyj';
  }
  console.log(a);


//호이스팅에 의한 코드
  let a; //선언
  if(true){
    a = 'hyj'; //할당
  }
  console.log(a);