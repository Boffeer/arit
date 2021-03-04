if (window.innerWidth < 1200){
	let burger = document.querySelector('.burger');
	let burgerMenu = document.querySelector('.burger-menu');
	let isBurgerShown = false;
	let burgerContent = ['.socials', '.header-email', '.header-phone', '.header_get-consult', '.header-logo-descriptor'];

	document.querySelector('.burger-nav').appendChild(document.querySelector('.nav-list'))
	burgerContent.map(item => {
		document.querySelector('.burger-contacts').appendChild(document.querySelector(item))
	})


	const showBurger = () => {
		burger.classList.add('burger--shown');
		burgerMenu.classList.add('burger-menu--shown');
		isBurgerShown = true;
		document.querySelector('html').classList.add('pop-opened--html');
		document.querySelector('.header-wrapper').classList.add('header--burger-shown');
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
}

popa({
	clickTrigger: '.header_get-consult',
	popWrap: '.consult-pop-wrap',
	pop: '.consult-pop',
	popCloser: '.pop-closer',
})



const header = document.querySelector('.header-wrapper')

let offsetOld
let offsetNew
document.addEventListener('scroll', function(){
	offsetNew = window.pageYOffset;
	if ((offsetNew < offsetOld) && offsetOld != undefined) {
		console.log('Шапка появилась')
		setTimeout(function(){
			header.classList.remove('header--hidden')
			header.classList.add('header--visible')
		}, 500)
	} else {
		setTimeout(function(){
			header.classList.remove('header--visible')
			header.classList.add('header--hidden')
		}, 100)
	}
	offsetOld = window.pageYOffset;
})




let phoneInput = [...document.querySelectorAll('.input--phone')];

phoneInput.map(item => {
	item.addEventListener('keydown', function(event){
		if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
			event.preventDefault()
		}
		let mask = '+7 (111) 111-11-11';
		if (/[0-9\+\ \-\(\)]/.test(event.key)) {
			let currentString = this.value;
			let currentLength = currentString.length;
			if (/[0-9]/.test(event.key)) {
				if (mask[currentLength] == '1') {
					this.value = currentString + event.key;
				} else {
					for (let i = currentLength; i < mask.length; i++) {
						if (mask[i] == '1') {
							this.value = currentString + event.key;
							break;
						}
						currentString += mask[i]
					}
				}
			}
		}
	})
})



if (window.innerWidth < 1200){
	// Mobile footer reforming
	document.querySelector('.footer').appendChild(document.querySelector('.footer-copyright'));
	document.querySelector('.footer-top__content').appendChild(document.querySelector('.footer-contact--phone'));
	document.querySelector('.footer-top__content').appendChild(document.querySelector('.footer_get-contacts'));
	document.querySelector('.footer-copyright').removeChild(document.querySelector('.footer-copyright br'))
}


// Map
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
	}, mapsDelay)
