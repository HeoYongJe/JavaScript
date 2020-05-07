//클로저
//함수와 그 함수가 선언된 렉시컬 환경과의 조합

const x = 1;
function outer(){
  const x = 10;
  inner();
}

function inner(){
  console.log(x);
}

outer()
inner()

const k = 1;

function outer2(){
  const k = 10;
  const inner2 = function(){
    console.log(k);
  };
  return inner2;
};


const innerFunc = outer2;
innerFunc();

//클로저예제
function foo(){
  const q = 1;
  const w = 2;

  //클로저
  function bar(){
    console.log(x);
  }
  return bar;
}
const bar = foo;
bar();




