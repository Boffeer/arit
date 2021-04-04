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
	if ($.currentItem > (items.length -1)) {
			clickHandler.setAttribute('hidden', true)
			clickHandler.classList.add('show-more-button--hidden', true)
	}
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


/*
 * items
 *
*/
const showMeetup = ($) => {
	let items = [...document.querySelectorAll($.items)];
	let itemsDue = [...document.querySelectorAll('.meetup-next-item-due')]
	let currentItem = document.querySelector('.meetups-item');

	// console.log(items);
	items.map(item => {
		item.addEventListener('click', () => {
			itemsDue.map($ => $.classList.remove('meetup-next-item-due--current'));
			item.querySelector('.meetup-next-item-due').classList.add('meetup-next-item-due--current');
			let meetupAddress = item.getAttribute('data-address');
			let meetupDate = item.getAttribute('data-date');
			let meetupPic = item.getAttribute('data-src');
			let meetupUrl = item.getAttribute('data-url');
			let meetupFormName = item.getAttribute('data-form-name');
			console.log(meetupFormName);
			let meetupTopic = item.querySelector('.meetup-next-item-info__topic').innerText;


			// console.log(meetupAddress, meetupDate, meetupTopic, meetupPic);
			if (meetupAddress != '') {
				currentItem.querySelector('.meetup-location p').innerText = meetupAddress;
				currentItem.querySelector('.meetup-location').classList.remove('hidden')
			} else {
				currentItem.querySelector('.meetup-location').classList.add('hidden')
			}
			if (meetupDate != '') {
				currentItem.querySelector('.meetup-time p').innerText = meetupDate;
				currentItem.querySelector('.meetup-time').classList.remove('hidden')
			} else {
				currentItem.querySelector('.meetup-time').classList.add('hidden')
			}
			// console.log(meetupDate)
			currentItem.querySelector('.meetup__title').innerText = meetupTopic;
			currentItem.querySelector('.meetups__picture img').setAttribute('src', meetupPic);
			// currentItem.querySelector('.meetup__secondary-button').setAttribute('href', meetupUrl);
			currentItem.querySelector('.primary-button').setAttribute('data-form-name', meetupFormName);
			currentItem.querySelector('.meetup__title--link').setAttribute('href', meetupUrl);

			if (window.innerWidth < 1300) {
				document.querySelector('.section__title').scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}
			
		})
	})
}




const makeFormName = ($) => {
	let clickHandler = [...document.querySelectorAll($.clickHandler)];
	let formToName = document.querySelector($.formname)

	clickHandler.map(item => {
		item.addEventListener('click', function(){
			let getFormName = item.getAttribute('data-to-form');
			formToName.setAttribute('value', getFormName);
		})
	})
}
