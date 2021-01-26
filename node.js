const { divide } = require("lodash");

<button class="nike">Hello</button>
//button은 요소노드, class는 어트리뷰트, nike는 어트리뷰트 값, Hello(content)는 텍스트노드로 변환

document.prototype.getElementById 메소드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소노드를 탐색하여 반환
getElementById 메소드는 인수로 전달된 id 값을 갖는 첫번째 요소 노트만을 반환
즉, 언제나 단 하나의 요소노드를 반환한다


document.prototype.quertSelector 메소드는 인수로 전달한 CSS선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다
노드가 여러개인 경우, 첫번째 요소 노드만 반환한다
만족시키는 요소고 없을 경우 null을 반환

Element.prototype.matches 메소드는 인수로 전달된 선택지에 의해 특정 노드를 탐색 가능한지 확인

<ul id="fruits">
    <li class="apple">Apple<span>사과</span></li>
    <li class="banana">Banana</li>
    <li class="orange">Orange</li>
</ul>

const $apple = document.querySelector('.apple');
console.log($apple.matches('#fruits > li.apple')); //true
console.log($apple.matches('#fruits > li.banana')); //false


innerHTML 요소 노드의 HTML 마크업을 취득하거나 변경한다
요소노드의 컨텐츠 영역 내에 포함된 모든 HTML 마크업을 문자열로 반환

textContent 프로퍼티를 참조하면 HTML 마크업을 무시하고 텍스트만 반환하지만 innerHTML 프로퍼티는 HTML 마크업을 그대로 반환
const $apple = document.querySelector('.apple'); // Apple<span>사과</span>

innerHTML 프로퍼티에 HTML 마크업 문자열을 할당하면 유지되어도 좋은 기존의 자식 노드까지 모두 제거하고 처음부터 자식 노드를 생성하여 DOM에 반영한다는 단점이 있다
이렇게 되면 크로스 사이트 스크립팅 공격에 취약해진다(XSS:Cross site Scripting Attacks) HTML마크앱 내에 js악성 코드가 포함되어 있다면
파싱 과정에서 그대로 실행될 가능성이 있기 때문이다.

예방하기 위해 DOMPurift 라이브러리를 사용 할 수 있다 
DOMPurify.sanitize('~~~');

