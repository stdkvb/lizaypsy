const menuController = function () {
	const burger = document.getElementById('burger')
	const menu = document.getElementById('menu')
	burger.addEventListener('click', () => {
		menu.classList.toggle('active')
		burger.classList.toggle('active')
		document.body.style.overflow = 'hidden'
	})

	const links = menu.querySelectorAll('.link')
	console.log(links)
	links.forEach((element) => {
		element.addEventListener('click', () => {
			menu.classList.toggle('active')
			burger.classList.toggle('active')
			document.body.style.overflow = 'unset'
		})
	})
}

export default menuController

