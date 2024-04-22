const menuController = function () {
	const burger = document.getElementById('burger')
	const menu = document.getElementById('menu')
	burger.addEventListener('click', () => {
		menu.classList.toggle('active')
		burger.classList.toggle('active')
		// document.body.classList.toggle('lock')
	})

	const links = menu.querySelectorAll('.link')
	links.forEach((element) => {
		element.addEventListener('click', () => {
			menu.classList.toggle('active')
			burger.classList.toggle('active')
			// document.body.classList.toggle('lock')
		})
	})
}

export default menuController

