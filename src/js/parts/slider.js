export function slider() {
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