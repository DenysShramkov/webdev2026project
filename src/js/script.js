/* import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css" */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

const burger = document.querySelector('.burger'),
	close = document.querySelector('.header__menu-close'),
	menu = document.querySelector('.header__menu');

burger.addEventListener('click', (e) => {
	menu.classList.add('header__menu_active');
	document.body.style.overflow = "hidden";
});

close.addEventListener('click', (e) => {
	menu.classList.remove('header__menu_active');
	document.body.style.overflow = "";
});

close.addEventListener('click', (e) => {
	menu.classList.remove('header__menu_active');
	document.body.style.overflow = "";
});

document.addEventListener('keydown', (event) => {
	const key = event.key || event.keyCode; 
	if (key === 'Escape' || key === 27) {
		menu.classList.remove('header__menu_active');
		document.body.style.overflow = "";
	}
});

try {
	// init Swiper:
	const swiper = new Swiper('.works__swiper', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		mousewheel: true,
		keyboard: true,
		loop: true,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 5,
				navigation: {
					nextEl: ".works__swiper-button-next",
					prevEl: ".works__swiper-button-prev",
				},
			},
			1920: {
				slidesPerView: 3,
				spaceBetween: 35,
			},
		}
	});
} catch (e) {}

try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach((tab) => tab.classList.remove('catalog__tab_active'));
			contents.forEach((content) => {content.style.display = "none"; content.classList.remove("catalog__content-item-active")});
			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "grid";
			contents[index].classList.add("catalog__content-item-active");
		})
	})

	contents.forEach((content, index) => (content.style.display = index === 0 ? "grid" : "none"));
} catch (e) {}