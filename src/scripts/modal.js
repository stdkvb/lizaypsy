const modalController = () => {
	const openModalButton = document.querySelector('#open-modal')

	const modal = document.querySelector('.modal')
	if (modal !== null && modal.classList.contains('modal_active')) {
		document.body.style.overflow = 'hidden'
	}

	openModalButton.addEventListener('click', () => {
		if (modal !== null) {
			modal.classList.add('modal_active')
			document.body.style.overflow = 'hidden'
		}
	})

	const modalCloseButtons = document.querySelectorAll('.modal__close')
	modalCloseButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.parentElement.classList.remove('modal_active')
			document.body.style.overflow = 'unset'
		})
	})
}

export default modalController

