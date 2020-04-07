export function timer() {
	let deadline = '2021-03-23';    // время до которого считает таймер

	let getTimeRemaining = (endtime) => {                 // endtime - это дата дедлайна
			let t = Date.parse(endtime) - Date.parse(new Date()),  // тут мы вычисляем сколько осталось времени (new Date() - это время сейчас)
					seconds = Math.floor((t/1000) % 60),   // Math.floor - округление, далее получаем секунды (получая остаток от деления на 60)
					minutes = Math.floor((t/1000/60) % 60), // Аналогично, только получаются минуты
					hours = Math.floor((t/(1000*60*60))); // Получение часов
	
			return {                            // Возвращение объекта (возможно надо удалить)
				'total'   : t,
				'hours'   : hours,
				'minutes' : minutes,
				'seconds' : seconds
			};
	};
	// Функция таймера, в id передается элемент, в endtime передается время
	const setClock = (id, endtime) => {
			let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds'),
					timeInterval = setInterval(updateClock, 1000); // вызывает функцию updateClock каждую секунду




			function updateClock() {     // Эта функция выводит данные в вёрстку

					let t = getTimeRemaining(endtime);
					
					function addZero(num){
							if(num <= 9) {
									return '0' + num;
							} else {
									return num;
							}
					}
					hours.textContent = addZero(t.hours);
					minutes.textContent = addZero(t.minutes);
					seconds.textContent = addZero(t.seconds);
					
					// Если дата некорректная (или насутпила) в таймере выводится 00 00 00
					if (t.total <= 0) {
							clearInterval(timeInterval);
							hours.textContent = '00';
							minutes.textContent = '00';
							seconds.textContent = '00';
					}
			}
	};
	setClock('timer', deadline);    // timer это элемент с html страницы! В функции выше это видно
}

