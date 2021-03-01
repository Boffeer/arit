
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


// Testimonials

let testimonials = {
	items: '.testimonial-item',
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
	initialShow: 1,
	itemsToShow: 2,
	currentItem: 0,
	clickHandler: '.meetups-more'

}
let webinars = {
	items: '.meetups-item--webinar',
	initialShow: 1,
	itemsToShow: 2,
	currentItem: 0,
	clickHandler: '.meetups-more'
}


window.addEventListener('resize', function() {

})
if (window.innerWidth < 1000){


	let burger = document.querySelector('.burger');
	let burgerMenu = document.querySelector('.burger-menu');
	let isBurgerShown = false;
	let burgerContent = ['.socials', '.header-email', '.header-phone', '.header_get-consult'];

	document.querySelector('.burger-nav').appendChild(document.querySelector('.nav-list'))
	burgerContent.map(item => {
		document.querySelector('.burger-contacts').appendChild(document.querySelector(item))
	})

	const showBurger = () => {
		burger.classList.add('burger--shown');
		burgerMenu.classList.add('burger-menu--shown');
		isBurgerShown = true;
		document.querySelector('html').classList.add('pop-opened--html');
		document.querySelector('.header').classList.add('header--burger-shown');
	}

	const hideBurger = () => {
		burger.classList.remove('burger--shown');
		burgerMenu.classList.remove('burger-menu--shown');
		isBurgerShown = false;
		document.querySelector('html').classList.remove('pop-opened--html');
		document.querySelector('.header').classList.remove('header--burger-shown');
	}

	burger.addEventListener('click', function(){
		!isBurgerShown
			? showBurger()
			: hideBurger()
	})








	showInitialItems({
		items: '.learning-tab--skillup .learning-tab-list-item',
		initialShow: 6,
		itemsToShow: 6,
		currentItem: 0,
		clickHandler: '.learning-more--skillup'
	})
	showInitialItems({
		items: '.learning-tab--retrain .learning-tab-list-item',
		initialShow: 6,
		itemsToShow: 6,
		currentItem: 0,
		clickHandler: '.learning-more--retrain'
	})

	showInitialItems({
		items: '.about__text',
		initialShow: 2,
		itemsToShow: 4,
		currentItem: 0,
		clickHandler: '.about-more'
	})

	showInitialItems({
		items: '.meetups-item--webinar',
		initialShow: 1,
		itemsToShow: 2,
		currentItem: 0,
		clickHandler: '.meetups-more--webinars'
	})
	showInitialItems({
		items: '.meetups-item--seminar',
		initialShow: 1,
		itemsToShow: 2,
		currentItem: 0,
		clickHandler: '.meetups-more--seminars'
	})

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

	// Mobile footer reforming
	document.querySelector('.footer').appendChild(document.querySelector('.footer-copyright'));
	document.querySelector('.footer-top__content').appendChild(document.querySelector('.footer-contact--phone'));
	document.querySelector('.footer-top__content').appendChild(document.querySelector('.footer_get-contacts'));
	document.querySelector('.footer-copyright').removeChild(document.querySelector('.footer-copyright br'))

} else {
	showInitialItems(seminars)
	showInitialItems(webinars)
	showInitialItems(testimonials)

}


	const lazyYmap = () => {
		let mapContainer = document.querySelector('.form-map');
		let optionsMap = {
			once: true,
			passive: true,
			capture: true
		};
		// mapContainer.addEventListener('click')

		let mapLoaded = false;
		function startLazyMap(){
			if (!mapLoaded) {
				let mapBlock = document.querySelector('.ym-lazy');
				mapLoaded = true;
				mapBlock.setAttribute('src', mapBlock.getAttribute('data-src'));
				mapBlock.removeAttribute('data_src');
				console.log('Ym loaded')
			}
		}
		startLazyMap()
	}

	setTimeout(function(){
		lazyYmap()
	},10000)
