const dropdown = ($) => {
	let dropdowns = [...document.querySelectorAll($.container)];

	dropdowns.map(item => {
		let handler = item.querySelector($.handler);

		handler.addEventListener('click', () => {
			item.querySelector($.dropdown)
				.classList.toggle('dropdown-block--opened');
			handler.classList.toggle('dropdown-block__handler--opened')
				console.log(item, $.dropdown, $.handler)
			})
	})
}
