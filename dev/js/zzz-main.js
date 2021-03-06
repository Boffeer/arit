const isHereChecker = (elementClass, callback) => {
	if (document.querySelector(elementClass) != null) {
		callback()
	} else {
		console.log(`There is no element with class ${elementClass}`)
	}
}




const selector = (className) => {
	return document.querySelector(className)
}

// sliders
	const teachersSlider = new Swiper('.teachers-slider-wrap',{
		slidesPerView: 1,
		spaceBetween: 50,
		autoHeight: true,
		centeredSliderBounds: true,
		scrollbar: {
			el: '.teachers-slider-scrollbar',
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerGroup: 3,
				slidesPerView: 3,
				navigation: {
					nextEl: '.teachers-slider-next',
					prevEl: '.teachers-slider-prev',
				},
			},
		}
	})

	const newsSlider = new Swiper('.news-slider-wrapper',{
		slidesPerView: 1,
		slidesPerColumn: 1,
		spaceBetween: 20,
		scrollbar: {
			el: '.news-slider-scrollbar',
			hide: false,
		},
		centerInsufficientSlides: true,
		centeredSliderBounds: true,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				navigation: {
					nextEl: '.news-slider-next',
					prevEl: '.news-slider-prev',
				},
			},
		}
	})

	const partnersSlider = new Swiper('.partners-slider-wrap',{
		slidesPerView: 1,
		spaceBetween: 20,

		slidesPerColumn: 2,
		slidesPerColumnFill: 'row',

		scrollbar: {
			el: '.partners-slider-scrollbar',
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
				slidesPerColumn: 1,
				navigation: {
					nextEl: '.partners-slider-next',
					prevEl: '.partners-slider-prev',
				},
			}
		}
	})







if (window.innerWidth < 1200){
		document.querySelector('.testimonials-slider-wrap').classList.add('swiper-container');
		document.querySelector('.testimonials-list').classList.add('swiper-wrapper');
		document.querySelector('.testimonials-slider-scrollbar').classList.add('.slider-scrollbar');

		 const testimonialsSlider = new Swiper('.testimonials-slider-wrap', {
			slidesPerView: 1,
			spaceBetween: 20,
			scrollbar: {
				el: '.testimonials-slider-scrollbar',
				hide: false,
			},
	})
}
