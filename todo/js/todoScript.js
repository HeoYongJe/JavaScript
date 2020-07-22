// setbutton id 
const $contentList = document.getElementById('contentList');
const $todoWriteArea = document.getElementById('todoWriteArea');


// setbutton class 
const $todoWriting = document.querySelector('.todoWriting');
const $inlineBtn = document.querySelector('.inlineBtn');
const $todoAdd = document.querySelector('.todoAdd');
const $todoDelete = document.querySelector('.todoDelete');
const $writeAdd = document.querySelector('.writeAdd');
const $layoutBtn = document.querySelector('.layoutBtn');
const $dateBtn = document.querySelector('.dateBtn'); 
const $respons = document.querySelector('.respons'); 
const $inputBtn = document.querySelector('.inputBtn'); 
const $textListItem = document.querySelector('.textListItem'); 
const $todos = document.querySelector('.todos'); 

//status
let todos = [];



const textOpenArea = () => ([...$todoWriting.classList].includes('textOpen'));
const setOpen = (boolean) => {
    if (boolean) {
        $todoWriting.classList.remove('textOpen');
        $writeAdd.style.display = 'none';
        $todoWriteArea.style.display = 'flex';
        $todoWriting.innerHTML = 'Open';
        $dateBtn.style.display = 'none';
    } else {
        $todoWriting.classList.add('textOpen');
        $inlineBtn.classList.add('inlineBtn');
        $writeAdd.style.display = 'block';
        $todoWriteArea.style.display = 'block';   
        $todoWriting.innerHTML = 'Close';
        $layoutBtn.style.display = 'inline-block';  
        $dateBtn.style.display = 'inline-block';  
    }
};


//자료구조
const render = () => {
    let str = '';
    let renderTodo;

    renderTodo.forEach((todo) => {
      str += `<li id="${todo.id}" class="todo-item">
                <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
                <i class="remove-todo far fa-times-circle"></i>
              </li>`;
    });
    $contentList.innerHTML = str;
};
  
  
const getTodos = () => {
    todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ].sort((todo1, todo2) => todo2.id - todo1.id);
};






$todoWriting.addEventListener('click', () => setOpen(textOpenArea()));
$todoAdd.addEventListener('click', () => render());
$todoDelete.addEventListener('click', () => outputDeleteArea(renderTodo()));
//작성하기 버튼을 클릭시에 textarea창이 열렀다 닫혔다를 할수 있도록 한다.
//배열안에 객체로 보통가지고있는데 textarea에 작성한 내용이 배열로 가고 그 배열을 그려주는게 필요하다


//setup / draw 함수 찾아보기 
//자료형 구조를 만들어서 꺼내서 쓸 수 있게끔 만들기


//forEach 리턴이 없다 / 
//map은 리턴이 있다
// filter() : 특정 조건에 맞는 배열 반환
// includes() : 해당 값이 포함된지 확인



// [배열내장함수 안에 인수를 무조건 함수로 받는다]
// * 배열내장함수의 return의 의미  
// forEach : 새로운 배열 아님, 리턴이 무조건 언디파인드
// map : 새로운 배열 , return 값이 배열의 요소로 / 전체원본 길이 모두 필요할때(ex 가격수정, 인상등)
// sort : 새로운 배열 ,  원본을 건드리므로 조심, 정렬개념, 
// reduce : 누적 연산 나타낼때 (acc, cur) acc 는 누적 cur 현재 ,  
// firter : 새로운 배열, return 값이 참인 요소만으로 이루어진 새로운 배열을 만든다 / 원본길이와 같거나 다 작을 때

// 배열내장함수 고르는 방법  / 1. 새로운 배열이 필요한가 ? 2.특정값이 필요한가 (reduce) 이두개가 해당이 없으면 forEach