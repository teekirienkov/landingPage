export function form() {
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Произошла ошибка'
};

let form = document.querySelector('.main-form'), // получение формы обратной связи
		input = form.getElementsByTagName('input'),
		formDown = document.querySelector('#form'),
		statusMessage = document.createElement('div'); // создание дива с сообщением
		
		statusMessage.classList.add('status'); // Этот класс уже прописан в css


function sendForm(elem) {
elem.addEventListener('submit', function(event) {
		event.preventDefault();
		elem.appendChild(statusMessage);

		let formData = new FormData(elem);

	function postData() {
		return new Promise(function (resolve, reject) {
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php'); // пост запрос на мой сервер
			request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					resolve();
				} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							resolve();
						} else {
							reject();
						}
					}
				};
			let obj = {};
			formData.forEach (function (value, key) {
				obj[key] = value;
			});
			let json = JSON.stringify(obj);
			request.send(json);
		});
	}
	// Функция чистки инпута
	function clearInput() {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	}
	// Обращение к функции с Промисом и его методы then, catch
	postData (formData)
		.then(() => {
				statusMessage.innerHTML = message.loading;
		})
		.then(() => {
				statusMessage.innerHTML = message.success;
		})
		.catch(() => {
				statusMessage.innerHTML = message.failure;
		})
		.then(()=>{           // Тут then вызывается после catch, это подразумевает выполнение в любом случае
				clearInput();
		});
	}); // elem.addEventListener
} // sendForm
sendForm(form);
sendForm(formDown);
}
