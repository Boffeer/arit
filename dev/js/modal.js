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
}

function popa(data){
	data.clickTrigger.addEventListener("click", () => popToggle(data.popWrap, data.pop));
	data.popCloser.addEventListener('click', () => closePop(data.popWrap, data.pop));
}

// const btn = document.querySelector('.pop-opener');
// const closeBtn = document.querySelector('.pop-closer');
// const popWrap = document.querySelector('.pop-wrap');
// const pop = document.querySelector('.pop');
//
// popa({
//     clickTrigger: btn,
//     popWrap: popWrap,
//     pop: pop,
//     popCloser: closeBtn,
// })
