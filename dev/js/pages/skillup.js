// Learning tabs
//
const skillupTabHandler = document.querySelector('.learning-tab__control--skillup');
const skillupTab = document.querySelector('.learning-tab--skillup');
const retrainTabHandler = document.querySelector('.learning-tab__control--retrain');
const retrainTab = document.querySelector('.learning-tab--retrain');

	skillupTabHandler.addEventListener('click', function(){
		this.classList.add('learning-tab__control--active')
		skillupTab.classList.add('learning-tab--active');
		retrainTabHandler.classList.remove('learning-tab__control--active')
		retrainTab.classList.remove('learning-tab--active')
	})
	retrainTabHandler.addEventListener('click', function(){
		this.classList.add('learning-tab__control--active');
		retrainTab.classList.add('learning-tab--active');
		skillupTabHandler.classList.remove('learning-tab__control--active');
		skillupTab.classList.remove('learning-tab--active');
	})
