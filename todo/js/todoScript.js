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
  
    [...$nav.children].forEach(child => {
      if (![...child.classList].includes('active')) return;
  
      if (child.id === 'all') renderTodo = todos;
      else if (child.id === 'active') renderTodo = nonCheckedTodos;
      else renderTodo = checkedTodos;
    });
    renderTodo.forEach((todo) => {
      str += `<li id="${todo.id}" class="todo-item">
                <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
                <label for="ck-${todo.id}">${todo.content}</label>
                <i class="remove-todo far fa-times-circle"></i>
              </li>`;
    });
  
    $todos.innerHTML = str;
  };
  
  const countCompleted = () => {
    const countCom = todos.filter(todo => todo.completed ).length;
    $completedTodos.innerHTML = countCom;
    $activeTodos.innerHTML = todos.length - countCom;
  };
  
  const getTodos = () => {
    todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ].sort((todo1, todo2) => todo2.id - todo1.id);
  
    checkedTodos = todos.filter(todo => todo.completed);
    nonCheckedTodos = todos.filter(todo => !todo.completed);
    countCompleted();
  
    render();
  };






$todoWriting.addEventListener('click', () => setOpen(textOpenArea()));
$todoAdd.addEventListener('click', () => outputAdd());
$todoDelete.addEventListener('click', () => outputDeleteArea());
//작성하기 버튼을 클릭시에 textarea창이 열렀다 닫혔다를 할수 있도록 한다.
//배열안에 객체로 보통가지고있는데 textarea에 작성한 내용이 배열로 가고 그 배열을 그려주는게 필요하다


//setup / draw 함수 찾아보기 