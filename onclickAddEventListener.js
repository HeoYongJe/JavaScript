//onclick은 하나만, addEventListener는 여러 개
//onclick에는 하나의 콜백만 지정할 수 있지만, addEventListener를 사용하면 여러 개의 이벤트 리스너를 추가할 수 있다.
//onclick 이벤트 핸들러를 두 번 이상 사용한다면, 기존 이벤트 핸들러를 덮어쓰기 때문에 가장 아래에 추가한 핸들러만 제대로 작동한다.
//addEventListener는 기존 이벤트 핸들러를 덮어 쓰지 않고 얼마든지 계속해서 핸들러를 추가해도 모든 핸들러가 정상적으로 작동한다.
//하지만 addEventListener 같은 경우 IE8에서 작동을 하지 않기 때문에 구형브라우저의 구현이 필요 시 onclick 또는 다른 방법을 찾아야 한다.