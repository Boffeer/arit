//
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


// Testimonials

let testimonials = {
	items: [...document.querySelectorAll('.testimonial-item')],
	items: '.testimonial-item',
	// items: [...document.querySelectorAll('.testimonial-item[hidden]')],
	initialShow: 2,
	itemsToShow: 2,
	currentItem: 0,
	clickHandler: '.testimonials-more'
}


const showInitialItems = ($) => {
	let items = [...document.querySelectorAll($.items)] 
	items.map(mapped => mapped.setAttribute('hidden', true))
	items.slice(0,$.initialShow).map(mapped => mapped.removeAttribute('hidden'));
	$.currentItem+= $.itemsToShow;

	let clickHandler = document.querySelector($.clickHandler
	)
	clickHandler.addEventListener('click', function(){
		console.log(`
			allItems: ${items.length}
			currentItem: ${$.currentItem}
			itemsToShow: ${$.itemsToShow}
		`)
		$.currentItem+= $.itemsToShow;

		if ($.currentItem > (items.length - 1)) {
			clickHandler.setAttribute('hidden', true)
		}
		items.slice($.currentItem - $.itemsToShow, $.currentItem).map(mapped => mapped.removeAttribute('hidden'))
	})
}

let seminars = {
	items: '.meetups-item--seminar',
	initialShow: 2,
	itemsToShow: 2,
	currentItem: 0,
	clickHandler: '.meetups-more'

}
let webinars = {
	items: '.meetups-item--webinar',
	initialShow: 2,
	itemsToShow: 2,
	currentItem: 0,
	clickHandler: '.meetups-more'

}
showInitialItems(testimonials)
showInitialItems(seminars)
showInitialItems(webinars)
