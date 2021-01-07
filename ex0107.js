// 생성자 함수
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! My name is ' + this.name);
    };
  }
  
  // 인스턴스의 생성
  var person1 = new Person('Heo Yong Je', 'male');
  var person2 = new Person('Kim Jin Ju', 'female');
  
  console.log('person1: ', typeof person1);
  console.log('person2: ', typeof person2);
  console.log('person1: ', person1); //person2: person {name: 'Heo Yong Je, gender: 'male', sayHello: [Function]}
  console.log('person2: ', person2); //person2: person {name: 'Kim Jin Ju, gender: 'female', sayHello: [Function]}
  
  person1.sayHello();
  person2.sayHello();

  //생성자 함수 이름은 일반적으로 대문자로 시작 
  //생성자 함수를 사용하면 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.