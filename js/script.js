window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), // Тут табы Лечение, Отдых, Природа, Йога
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

    let deadline = '2020-03-23';    // время до которого считает таймер

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
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock('timer', deadline);    // timer это элемент с html страницы! В функции выше это видно
});