import selectController from './select'
import menuController from './mobile-menu'
import takeControlCookie from './cookie'
import takeControlAccordion from './accordion'
import modalController from './modal'

// selectController()
menuController()
// takeControlCookie('.cookie', '.cookie__accept')
modalController()

// var rellax = new Rellax('.rellax')

// swiper init
const educationSwiper = new Swiper('.education__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination'
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	autoplay: {
		delay: 5000
	}
})

// accordions init
takeControlAccordion('.enumeration', '.accordion__list', {
	accordionItemSelector: '.accordion__item',
	accordionItemTogglerSelector: '.accordion__toggle',
	accordionItemContentSelector: '.accordion__content',
	accordionItemActiveClass: 'accordion__item_active'
})

//easyweek button
document.addEventListener('scroll', () => {
	const position = document.querySelector('html').scrollTop
	if (position > 50) {
		document.querySelector('.EWBookingWidgetTrigger').classList.add('active')
	} else if (position < 50) {
		document.querySelector('.EWBookingWidgetTrigger').classList.remove('active')
	}
})

//fullpage image viewer
const imgs = document.querySelectorAll('.education__swiper  img')
const fullPage = document.querySelector('#fullpage')

imgs.forEach((img) => {
	img.addEventListener('click', function () {
		fullPage.querySelector('.fullpage__wrapper').style.backgroundImage = 'url(' + img.src + ')'
		fullPage.style.display = 'flex'
		document.body.style.overflow = 'hidden'
	})
})

