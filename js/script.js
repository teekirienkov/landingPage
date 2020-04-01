window.addEventListener('DOMContentLoaded', () => {
  'use strict';
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

    // Timer

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

    // Modal

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


    // Form
    // Отправка данных POST методом возможно только на локальном сервере!

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
      // функция чистки инпута
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
        .then(()=>{
            clearInput();
        });
      }); // elem.addEventListener
  } // sendForm
  sendForm(form);
  sendForm(formDown);


  // SLIDER
  // Получение элементов слайдера
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  
  function showSlides(n) {
    // Проверки для корректного переключения последнего слайда на первый и наоборот
    if (n > slides.length) {
        slideIndex = 1;
    }
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

  // CALCULATOR

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

}); // window