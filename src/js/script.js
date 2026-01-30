/* import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css" */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

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