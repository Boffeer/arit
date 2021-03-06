/*
 * items
 * clickHandler
 * itemsToShow
 * initialShow 
 * currentItem
 *
 *
 * */


const showmore = ($) => {
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
			clickHandler.classList.add('show-more-button--hidden', true)
		}
		items.slice($.currentItem - $.itemsToShow, $.currentItem).map(mapped => mapped.removeAttribute('hidden'))
	})
}


