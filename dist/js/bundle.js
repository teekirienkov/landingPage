/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
function calc() {
	let persons = document.querySelectorAll('.counter-block-input')[0],
	restDays = document.querySelectorAll('.counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;

totalValue.innerHTML = 0;

// Количество человек
persons.addEventListener('change', function() {
personsSum = +this.value; // получаем value у persons (так как родитель в обработчике события)
total = (daysSum + personsSum)*4000;

// проверка, если второй инпут (кол-во дней) пустой, то цена поездки не изменяется, остаётся 0
if (restDays.value == '') {
	totalValue.innerHTML = 0;
} else {
		totalValue.innerHTML = total;
}
});
// Количество дней
restDays.addEventListener('change', function() {
daysSum = +this.value; // получаем value у persons (так как родитель в обработчике события)
total = (daysSum + personsSum)*4000;

// проверка, если второй инпут (кол-во дней) пустой, то цена поездки не изменяется, остаётся 0
if (persons.value == '') {
	totalValue.innerHTML = 0;
} else {
		totalValue.innerHTML = total;
}
});
// чекбокс
place.addEventListener('change', function() {
	if (restDays.value == '' || persons.value == '') {
		totalValue.innerHTML = 0;
	} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value; // получение из чекбокса value
	}
});
}


/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
function form() {
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


/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
function modal() {
	let more = document.querySelector('.more'),
	buttonsMore = document.querySelectorAll('.description-btn'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

more.addEventListener('click', function() {
	overlay.style.display = 'block';

	this.classList.add('more-splash');    // this создает в этой области класс (в more)
	document.body.style.overflow = 'hidden';
});

buttonsMore.forEach(function(item){
	item.addEventListener('click', function() {
			overlay.style.display = 'block';
	});
});


close.addEventListener('click', function() {
	overlay.style.display = 'none';

	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});
}


/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
function slider() {
	let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  
  function showSlides(n) {
    // Проверки для корректного переключения последнего слайда на первый и наоборот
    // Если слайд становится больше чем их есть, то переключается на первый
    if (n > slides.length) {
        slideIndex = 1;
    }
    // и наоборот
    if (n < 1) {
        slideIndex = slides.length;
    }
    // скрываем все слайды со страницы, item - каждый слайд
    slides.forEach((item) => {
        item.style.display = 'none';
    });
    // тоже самое с точками
    dots.forEach((item) => {
        item.classList.remove('dot-active');
    });
    // Добавление первой картинки и первой точки
    // конвертирование в индекс (чтобы сначала был индекс 0)
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }
  showSlides();

  // Функция переключения слайда
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // Когда кликаем на 4 точку, тут будет 4 слайд
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Обработчики событий стрелок
  prev.addEventListener('click', function() {
    plusSlides(-1);
  });
  next.addEventListener('click', function() {
    plusSlides(1);
  });
  
  // Делегирование событий для точек
  dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
  });
}

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
function tabs() {
	const tab = document.querySelectorAll('.info-header-tab'), // Тут табы Лечение, Отдых, Природа, Йога
    info = document.querySelector('.info-header'), // Тут все табы (которые в tab)
    tabContent = document.querySelectorAll('.info-tabcontent'); // Информация внутри табов
	
	const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++ ) {
      tabContent[i].classList.remove('show');       // Эта функция скрывает все tabContent
      tabContent[i].classList.add('hide');
    }
	};
	
	hideTabContent(1);  // Этот вызов (1) функции оставляет только 1 таб (Лечение)
	const showTabContent = (b) => {
			if (tabContent[b].classList.contains('hide')) {
					tabContent[b].classList.remove('hide');      // Эта функция показывает определенный таб
					tabContent[b].classList.add('show');
			}
	};
    // Этот обработчик установлен на все табы! Функция внутри него показывает нужный таб
  info.addEventListener('click', (event) => {      // Делегирование событий
    let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {     // Проверка что клик был на один из табов
        for (let i = 0; i < tab.length; i++) {        // Цикл работает пока не проверит все табы (tab.length)
          if (target == tab[i]) {              // Это условие выводит нужный таб
            hideTabContent(0);             // Функция скрывает все табы 
              showTabContent(i);             // Функция выводит нужный таб! 
              break;
          }
        }
      }
  });
}


/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
function timer() {
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



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js");
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js");











Object(_parts_calc__WEBPACK_IMPORTED_MODULE_0__["calc"])();
Object(_parts_form__WEBPACK_IMPORTED_MODULE_1__["form"])();
Object(_parts_slider__WEBPACK_IMPORTED_MODULE_2__["slider"])();
Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_3__["tabs"])();
Object(_parts_timer__WEBPACK_IMPORTED_MODULE_4__["timer"])();
Object(_parts_modal__WEBPACK_IMPORTED_MODULE_5__["modal"])();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map