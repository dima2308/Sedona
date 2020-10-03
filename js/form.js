var link = document.querySelector(".btn-search"); // поиск элемента по селектору
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function (event) { // обработка события для переменной
	event.preventDefault(); // убирает действие по умолчанию 
	popup.classList.add("modal-content-show"); // добавляет класс к элементу
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});