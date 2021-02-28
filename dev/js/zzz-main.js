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


// sliders
const teachersSlider = new Swiper('.teachers-slider-wrap',{
	// slidesPerView: 1,
	slidesPerView: 3,
	slidesPerGroup: 3,
	slidesPerColumn: 1,
	spaceBetween: 50,
	navigation: {
		nextEl: '.teachers-slider-next',
		prevEl: '.teachers-slider-prev',
	},
	scrollbar: {
		el: '.teachers-slider-scrollbar',
		hide: false,
	},
	// centerInsufficientSlides: true,
	centeredSliderBounds: true,
	breakpoints: {
		// when window width is >= 320px
		1200: {
			slidesPerView: 3,
		},
		
	}
})
const newsSlider = new Swiper('.news-slider-wrapper',{
	slidesPerView: 3,
	// slidesPerGroup: 3,
	slidesPerColumn: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.news-slider-next',
		prevEl: '.news-slider-prev',
	},
	scrollbar: {
		el: '.news-slider-scrollbar',
		hide: false,
	},
	centerInsufficientSlides: true,
	centeredSliderBounds: true,
})

const partnersSlider = new Swiper('.partners-slider-wrap',{
	slidesPerView: 5,
	spaceBetween: 20,
	navigation: {
		nextEl: '.partners-slider-next',
		prevEl: '.partners-slider-prev',
	},
	scrollbar: {
		el: '.partners-slider-scrollbar',
		hide: false,
	},
	centerInsufficientSlides: true,
	centeredSliderBounds: true,
})




