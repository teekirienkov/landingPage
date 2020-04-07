export function calc() {
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
