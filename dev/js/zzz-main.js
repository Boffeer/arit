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
