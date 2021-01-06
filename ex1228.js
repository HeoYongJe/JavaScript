const a = [1, 2, 7, 3, 5];

const result = a.sort();
console.log(result)
console.log(a)
const inc = a.includes(8);
console.log(inc)

a.push(4)
console.log(a)

class Person {
    // 클래스 필드에 선언시 최신 버전 nodejs나 브라우저에서 작동, 인스턴스 프로퍼티가 되지만 this를 이용한 초기화 불가
    legend = "WooooW";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayProfile() {
        console.log("hi");
    }

}

// Person.sayProfile();
//static(정적) 를 쓰게되면 인스턴스를 생성하지 않고 쓸 수 있다

