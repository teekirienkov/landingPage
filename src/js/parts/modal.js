export function modal() {
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
