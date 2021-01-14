

let $button = document.getElementById('button');
let $input = document.getElementById('input');
let $list = document.getElementById('list');
// let $checkBtn = document.getElementsByClassName('checkBtn')



$button.addEventListener('click', clickButton);
let cnt = 1;
// let checkBtn = [];
// function clickButton(){
//     let temp = document.createElement('li');
//     temp.innerHTML = input.value;
//     list.appendChild(temp);
// } //clickButton 함수는 클릭하면 li 요소를 만들어서 input 데이터를 넣고 list에 추가하는 함수

function clickButton() {
    let temp = document.createElement('li');
    temp.setAttribute("class", "listItem")
    temp.setAttribute("id", "li" + cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += `<button class='del' type='button'onclick='remove(" + cnt + ")'>삭제</button>`;
    temp.innerHTML += `<input class='checkBtn' type='checkbox' ${checkBtn.checked ? 'checked' : ''}>`
    list.appendChild(temp);
    cnt++;
}


input.addEventListener('click', clickCheck);

function clickCheck() {
    // if($checkBtn.add('checked')){
        checkBtn.createTextNode( 'checked'); 
    // } else{
    //     $checkBtn.remove('checked');
    // }

}

function remove(cnt) {
    var li = document.getElementById('li' + cnt);
    var checkBtn = document.getElementsByClassName('checked');
        if (checkBtn.includes('checked')) {
            list.removeChild(li);
        } else {
            alert('돌아가');
        }

}