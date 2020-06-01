
// setbutton id
const $contentList = document.getElementById('contentList'); //리스트가 담길 공간
const $todoWriteArea = document.getElementById('todoWriteArea');

// setbutton class
const $todoWriting = document.querySelector('.todoWriting');//작성하기 버튼
const $todoAdd = document.querySelector('.todoAdd'); //할일추가
const $writeAdd = document.querySelector('.writeAdd'); //내용입력
const $respons = document.querySelector('.respons'); 
const $textNode = document.getElementById('todoWriteArea').firstchild;

const listOpen = () => ([...$todoWriting.classList].includes('textOpen'));
const setOpen = (boolean) => {
    if (boolean) {
        $todoWriting.classList.remove('textOpen');
        $writeAdd.style.display = 'none';
    } else {
        $todoWriting.classList.add('textOpen');
        $writeAdd.style.display = 'block';
        $todoWriteArea.style.display = 'block';   
        // $textNode.nodevalue = 'Close';
        $textNode.innerHTML = '<li><button>close</button></li>';       
    }
};

$todoWriting.addEventListener = ('click', () => setOpen(listOpen()));



//작성하기 버튼을 클릭시에 textarea창이 열렀다 닫혔다를 할수 있도록 한다.
//배열안에 객체로 보통가지고있는데 textarea에 작성한 내용이 배열로 가고 그 배열을 그려주는게 필요하다


