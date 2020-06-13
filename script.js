let button = document.querySelector('.button');
let field = document.querySelector('.field');
let mainHeader = document.querySelector('.main-header');
let audio = new Audio();
let clicksCount = 0;


function buttonClick() {
	
	clicksCount = clicksCount + 1;
	
	
	if (clicksCount > 9) {
		let topMargin = Math.floor(Math.random() * 485);
		let leftMargin = Math.floor(Math.random() * 449);
		let newP = "<p class = 'p' style = 'top: " + topMargin + "px; left: " + leftMargin + "px;'>Ты педик</p>";
		field.insertAdjacentHTML("afterbegin", newP);
	}
	
	
	if (clicksCount == 1) {
		
		
		audio.src = 'music.mp3';
		audio.autoplay = true;
		
		
		mainHeader.textContent = 'Зацени, музыка заиграла'
		button.textContent = 'Слышу'
		
		
	} else if (clicksCount == 2) {
		
		mainHeader.textContent = 'Послушай немного, она прикольная'
		button.textContent = 'Ага, крутая'	

		
		
	} else if (clicksCount == 3) {
		
		mainHeader.textContent = 'Щас покажу охрененную вещь'
		button.textContent = 'Давай'
	
	
	} else if (clicksCount == 4) {
		
		mainHeader.textContent = '...'
		button.textContent = '...?'
		
		
	
	} else if (clicksCount == 5) {
		
		
		let granimInstance = new Granim({
			element: '#canvas-basic',
			name: 'basic-gradient',
			
			direction: 'radial',
			
			opacity: [10, 10],
			isPausedWhenNotInView: true,
			states : {
				"default-state": {
					gradients: [
						['#AFEEEE', '#fed6e3'],
						['#fed6e3', '#AFEEEE']
					],
					transitionSpeed: 7000
				}
			}
		});
		
		
		mainHeader.textContent = 'Вот. Круто?'
		button.textContent = 'Охрененно'	
	

	} else if (clicksCount == 6) {
		
		mainHeader.textContent = 'Это называется анимированный градиент'
		button.textContent = 'Звучит умно'

	} else if (clicksCount == 7) {
		
		mainHeader.textContent = 'Хочешь еще кое-что прикольное?'
		button.textContent = 'Конечно'


	} else if (clicksCount == 8) {
		
		mainHeader.textContent = 'Щас, дай мне секунду...'
		button.textContent = 'Жду'
	
	
	} else if (clicksCount == 9) {
		
		mainHeader.textContent = 'Готово, нажимай на кнопку'
		button.textContent = '...'
		
	
	} else if (clicksCount < 13) {
		
		mainHeader.textContent = 'Как ловко я тебя подловил'
		
	} else if (clicksCount < 16) {
		mainHeader.textContent = 'Все, хватит'
	} else if (clicksCount < 20) {
		mainHeader.textContent = 'Это уже невежливо'
	} else if (clicksCount < 25) {
		mainHeader.textContent = 'Засранец'
	} else if (clicksCount < 30) {
		mainHeader.textContent = 'Остановись'
	} else if (clicksCount < 40) {
		mainHeader.textContent = 'Падла'
	} else if (clicksCount < 45) {
		mainHeader.textContent = 'Какой же ты клоун'
	} else if (clicksCount < 50) {
		mainHeader.textContent = 'Посмотри на себя'
	} else if (clicksCount < 55) {
		mainHeader.textContent = 'Нет, ты не просто клоун. Ты целый цирк'
	} else if (clicksCount < 60) {
		mainHeader.textContent = 'Гнида'
		
	} else if (clicksCount < 65) {
		mainHeader.textContent = 'Ублюдок'

	} else if (clicksCount < 70) {
		mainHeader.textContent = 'Палец не устал?'
		
	} else if (clicksCount < 75) {
		mainHeader.textContent = 'Поганец'
		
	} else if (clicksCount < 80) {
		mainHeader.textContent = 'Ну ты и говнюк'

	} else if (clicksCount < 85) {
		mainHeader.textContent = 'Хотя знаешь что'
		
	} else if (clicksCount < 90) {
		mainHeader.textContent = 'Я рад, что ты заглянул ко мне'

	} else if (clicksCount < 95) {
		mainHeader.textContent = 'Спасибо тебе'

	} else if (clicksCount < 100) {
		mainHeader.textContent = 'Но все-таки ты гнида'		
	
	} else if (clicksCount < 105) {
		mainHeader.textContent = 'Но как-нибудь надо еще так собраться'		
		
	} else {
		mainHeader.textContent = 'До встречи. Развлекайся'
	};
	
}

button.addEventListener('click', buttonClick);


audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
});












