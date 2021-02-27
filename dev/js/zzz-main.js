const teachersSlider = new Swiper('.teachers-slider-wrap',{
	slidesPerView: 3,
	spaceBetween: 60,
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
})
const newsSlider = new Swiper('.news-slider-wrapper',{
	slidesPerView: 3,
	spaceBetween: 38,
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
