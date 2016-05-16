;(function(){
	var body = document.body,
		btn	= body.querySelector('.ba-toggle'); /*возвращаем елемент у которого есть класс ba-toggle*/
		overlay = body.querySelector('.ba-overlay');

	btn.onclick = function () {
		body.classList.toggle('ba-menu-open');
	}
	overlay.onclick = function () {
		body.classList.toggle('ba-menu-open');
	}
})();
