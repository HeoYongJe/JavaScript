const macs = [
    { name: '2019 MacPro 16 MVVJ2KH/A', screen: 16, cpu: 'i7', ram: 16, ssd: 512, weight: 2, price: 2698000 },
    { name: '2019 MacPro 13 MV962KH/A', screen: 14, cpu: 'i5', ram: 8, ssd: 256, weight: 1.37, price: 1850000 },
    { name: '2019 MacPro 16 MVVM2KH/A', screen: 16, cpu: 'i9', ram: 16, ssd: 1000, weight: 2, price: 3161000 },
    { name: '2020 MacAir 13 MVH42KH/A', screen: 13.5, cpu: 'i5', ram: 8, ssd: 512, weight: 1.29, price: 1689000 },
    { name: '2019 MacPro 15 MV912KH/A', screen: 15.4, cpu: 'i9', ram: 16, ssd: 512, weight: 1.83, price: 2942000 }
  ];
  
  // * 풀이 조건: for문으로 풀고, 배열 내장함수에 들어갈 함수는 함수 선언문으로 작성된 함수를 넣어라
  // 1. 16인치 이상인 맥북의 이름을 모두 출력하라
  // 2. rma이 8기가 이상인 맥북의 이름을 모두 출력하라
  
  // 스크린이 16인치 이상이라면 16인치 이상의 노트북 이름을 모두 출력
  
  
  // for(let i = 0; i < macs.length; i++) {
  //   if(macs[i].screen >= 16) {
  //     console.log(macs[i].name);
  //   };
  // };
  


function z(mac){
  if(mac.screen >= 16){
    console.log(mac.name);
  }
};



//변수 함수(화살표) 매개변수 원시값과 객체 
//이론이랑 화살표함수

const macArea = macs.filter(mac => mac.screen >=16).map(mac => mac.name)
console.log(macArea)
// 필터는 새로운 배열 return이 참인것으로 만 이루어지므로 필터로 거르고 map로 돌린다

const bbb = macs.map(mac => mac.screen);
console.log(bbb)

const aaa = macs.forEach(mac => mac.screen);
console.log(aaa)

// forEach : 새로운 배열 아님, 리턴이 무조건 언디파인드



  //2번문제
  // for(let i = 0; i < macs.length; i++) {
  //   if(macs[i].ram >= 8) {
  //     console.log(macs[i].name)
  //   };
  // };


  function multiply(a, b) {
    return a * b;
}
 
var result = multiply(5);
 
console.log(result);