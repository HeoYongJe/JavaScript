
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


const outputAdd = (boolean) => {
    if($writeAdd.value !== ''){
        let textOut = $writeAdd.value;
        for(let i = 0; i < 1; i++){
            $contentList.innerHTML += `<li class="textListItem"><input type=checkbox value="checked" class="inputBtn"></input>${textOut}</li>`
        };
    }
    else{ 
        $writeAdd.value == '';
        alert('내용을 입렵해 주시기 바랍니다.');
        const $todoDate = document.getElementsByTagName('.dateBtn > input')
        $todoDate.value == '';
    }

}

const outputDeleteArea = (boolean) => {
    let checkBtn = [$contentList];

    console.log(checkBtn.length)
    // checkBtn[i].checked = false
    for(let i = 0; i < checkBtn.length; i++){
      if(checkBtn[i]){
        $contentList.innerHTML = '';

      }   
    //   else{

    //   };
    };
};





$todoWriting.addEventListener('click', () => setOpen(textOpenArea()));
$todoAdd.addEventListener('click', () => outputAdd());
$todoDelete.addEventListener('click', () => outputDeleteArea());

//작성하기 버튼을 클릭시에 textarea창이 열렀다 닫혔다를 할수 있도록 한다.
//배열안에 객체로 보통가지고있는데 textarea에 작성한 내용이 배열로 가고 그 배열을 그려주는게 필요하다


