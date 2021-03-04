// function ready(fn) {
//     if (document.readyState != 'loading'){




function showPop($popWrap, $pop) {
	$popWrap.classList.add('pop-wrap--opened')
	$pop.classList.add('pop--opened');
	document.querySelector('html').classList.add('pop-opened--html')
}

function closePop($popWrap, $pop) {
	$popWrap.classList.remove('pop-wrap--opened')
	$pop.classList.remove('pop--opened');
	document.querySelector('html').classList.remove('pop-opened--html')
}

function popToggle($popWrap, $pop){
	let popWrap = $popWrap,
		isPopHidden = window.getComputedStyle(popWrap).getPropertyValue('visibility') == 'hidden',
		pop = $pop;
	isPopHidden
		? showPop(popWrap, pop)
		: closePop(popWrap, pop)
	console.log($popWrap, $pop, 'toggled')
}


function popaAddClasses($popWrap, $pop) {
	$popWrap.classList.add('pop-wrap')
	$pop.classList.add('pop')
}

function popa(data){
	// let opener = [...document.querySelectorAll(data.clickTrigger)];
	// let closer = [...document.querySelectorAll(data.popCloser)];

	let popWrap = document.querySelector( data.popWrap );
	let pop = document.querySelector( data.pop );
	popaAddClasses(popWrap, pop)
	let opener = document.querySelector(data.clickTrigger);
	let closer = document.querySelector( data.popCloser );
	
	popWrap.removeAttribute('hidden');
	
	opener.addEventListener("click", function() {popToggle(popWrap, pop)});
	closer.addEventListener('click', function() {closePop(popWrap, pop)});

	// opener.map(mapped => mapped.addEventListener("click", () => popToggle(data.popWrap, data.pop)));
	// closer.map(mapped => mapped.addEventListener('click', () => closePop(data.popWrap, data.pop)));
}


if ( document.querySelector('.hero-cta') != null ) {
 	popa({
		clickTrigger: '.hero-cta',
		popWrap: '.consult-pop-wrap',
		pop: '.consult-pop',
		popCloser: '.pop-closer',
	})
}
//
//     } else {
//         document.addEventListener('DOMContentLoaded', fn);
//     }
// }
