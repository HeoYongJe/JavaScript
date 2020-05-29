// setbutton id
const $contentList = document.getElementById('contentList'); //리스트가 담길공간

// setbutton class
const $todoWriting = document.querySelector('.todoWriting');//작성하기 버튼
const $todoAdd = document.querySelector('.todoAdd'); //할일추가
const $writeAdd = document.querySelector('.writeAdd'); //textarea



const listOpen = () => ($todoAdd.classList.includes('textOpen'));
const setOpen = (boolean) => {
    if(boolean) {
        $todoAdd.classList.remove('textOpen');
        $writeAdd.style.display = 'none';
    } else {
        $todoAdd.classList.add('textOpen');
        $writeAdd.style.display = 'block';
    }
};
console.log(setOpen)
$todoWriting.addEventListener = ('click', () => SetOpen(listOpen()));