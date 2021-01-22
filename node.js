const { divide } = require("lodash");

<button class="nike">Hello</button>
//button은 요소노드, class는 어트리뷰트, nike는 어트리뷰트 값, Hello(content)는 텍스트노드로 변환

document.prototype.getElementById 메소드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소노드를 탐색하여 반환
getElementById 메소드는 인수로 전달된 id 값을 갖는 첫번째 요소 노트만을 반환
즉, 언제나 단 하나의 요소노드를 반환한다


document.prototype.quertSelector 메소드는 인수로 전달한 CSS선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다
노드가 여러개인 경우, 첫번째 요소 노드만 반환한다
만족시키는 요소고 없을 경우 null을 반환