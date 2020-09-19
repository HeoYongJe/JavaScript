// 동기식 처리 모델은 직렬적, 즉 순차적으로 실행되며 어떤 작업이 수행중이면 다음 작업은 대기하게 된다.
// function func1() {
//     console.log('func1');
//     func2();
//   }
  
//   function func2() {
//     console.log('func2');
//     func3();
//   }
  
//   function func3() {
//     console.log('func3');
//   }
  
//   func1();


// 비동기식 처리 모델은 병렬적, 즉 수행중인 작업이 종료되지 않은 상태라 하더라도 대기하지 않고 다음 작업을 실행한다.
//자바스크립트의 대부분의 DOM 이벤트 핸들러와 Timer함수, Ajax 요청은 비동기식 처리 모델로 작동한다.
function func1() {
    console.log('func1');
    func2();
  }
  
  function func2() {
    setTimeout(function() {
      console.log('func2');
    }, 0);
  
    func3();
  }
  
  function func3() {
    console.log('func3');
  }
  
  func1();

//위와같은 경우 setTimeout 메소드에 
//두번째 인수 0초로 설정하여도 순서대로 로그가 출려되지 않는데 setTimeout 메소드가 비동기 함수이기 때문이다.