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
	popaAddClasses(data.popWrap, data.pop)
	// let opener = [...document.querySelectorAll(data.clickTrigger)];
	// let closer = [...document.querySelectorAll(data.popCloser)];
	let opener = document.querySelector(data.clickTrigger);
	let closer = document.querySelector( data.popCloser );
	console.log(opener, closer)
	opener.addEventListener("click", () => popToggle(data.popWrap, data.pop));
	closer.addEventListener('click', () => closePop(data.popWrap, data.pop));
	
	// opener.map(mapped => mapped.addEventListener("click", () => popToggle(data.popWrap, data.pop)));
	// closer.map(mapped => mapped.addEventListener('click', () => closePop(data.popWrap, data.pop)));
}

const btn = '.header_get-consult';
const closeBtn = '.pop-closer';
const popWrap = document.querySelector('.consult-pop-wrap');
const pop = document.querySelector('.consult-pop');

popa({
	clickTrigger: btn,
	popWrap: popWrap,
	pop: pop,
	popCloser: closeBtn,
})
