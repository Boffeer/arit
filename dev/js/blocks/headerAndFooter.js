if (window.innerWidth < 1200){
	let burger = document.querySelector('.burger');
	let burgerMenu = document.querySelector('.burger-menu');
	let isBurgerShown = false;
	let burgerContent = ['.socials', '.header-email', '.header-phone', '.hero-learning'];

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

// popa({
//   clickTrigger: '.header_get-consult',
//   popWrap: '.consult-pop-wrap',
//   pop: '.consult-pop',
//   popCloser: '.pop-closer',
// })
popa({
	clickTrigger: '.footer_get-contacts',
	popWrap: '.consult-pop-wrap',
	pop: '.consult-pop',
	popCloser: '.pop-closer',
})

function scrollToTop($clickTrigger){
	document.querySelector($clickTrigger).addEventListener('click', function(){
		document.querySelector('html').scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
scrollToTop('.scroll-to-top');


const header = document.querySelector('.header-wrapper')

let offsetOld
let offsetNew
document.addEventListener('scroll', function(){
	offsetNew = window.pageYOffset;
	if ((offsetNew < offsetOld) && offsetOld != undefined) {
		// console.log('Шапка появилась')
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

	if (offsetNew < 1000) {
		document.querySelector('.scroll-to-top').classList.add('hidden');
	} else {
		document.querySelector('.scroll-to-top').classList.remove('hidden');
	}

	offsetOld = window.pageYOffset;
})




setTimeout(() => {

const input = [...document.querySelectorAll(".input--phone")];

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "7 (8";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

// ======================================

input.map(function(item){

	item.addEventListener("input", (e) => {
  // TODO CROSS ????
  // if (e.inputType === "deleteContentBackward") {
  //   return;
  // }

  // console.log(input.value);
  // if (input.value.includes("@")) {
  //   const value = input.value.replace(/[+)()\s]/g, "");
  //   input.value = value;
  //   return;
  // }
  //replace('/[^\d-]+/'
  let result = "+";
  const value = item.value.replace(/\D+/g, "");
  const numberLength = 11;
  //
  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  //
  item.value = result;
});
})
// ======================================
	// phoneInput.map(item => {
	//   item.addEventListener('keydown', function(event){
	//     if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
	//       event.preventDefault()
	//     }
	//     let mask = '+7 (111) 111-11-11';
	//     if (/[0-9\+\ \-\(\)]/.test(event.key)) {
	//       let currentString = this.value;
	//       let currentLength = currentString.length;
	//       if (/[0-9]/.test(event.key)) {
	//         if (mask[currentLength] == '1') {
	//           this.value = currentString + event.key;
	//         } else {
	//           for (let i = currentLength; i < mask.length; i++) {
	//             if (mask[i] == '1') {
	//               this.value = currentString + event.key;
	//               break;
	//             }
	//             currentString += mask[i]
	//           }
	//         }
	//       }
	//     }
	//   })
	// })
}, 3000)



if (window.innerWidth < 1200){
	// Mobile footer reforming
	let footer = document.querySelector('.footer');
	footer.appendChild(document.querySelector('.footer-copyright'));
	document.querySelector('.footer-top__content').appendChild(footer.querySelector('.footer-contact--phone'));
	document.querySelector('.footer-top__content').appendChild(footer.querySelector('.footer_get-contacts'));
	document.querySelector('.footer-copyright').removeChild(footer.querySelector('.footer-copyright br'))
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








const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			  behavior: 'smooth',
			  block: 'start'
		})
	})
}

