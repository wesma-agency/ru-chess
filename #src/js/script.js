document.addEventListener(
	"DOMContentLoaded",
	function () {
		let sliderMainSlider = new Swiper(".main-slider__container", {
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,

			navigation: {
				nextEl: ".main-slider__next",
				prevEl: ".main-slider__prev",
			},

			pagination: {
				el: ".main-slider__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current < 10 ? "0" + current : current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total < 10 ? "0" + total : total}</span>`;
				},
			},
		});

		let sldierNews = new Swiper(".news__slider-container", {
			slidesPerView: 1,
			spaceBetween: 15,
			watchOverflow: true,

			navigation: {
				nextEl: ".news__next",
				prevEl: ".news__prev",
			},
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 25,
				},

				1170: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
			pagination: {
				el: ".news__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
				},
			},
		});

		let sldierTournaments = new Swiper(".tournaments__slider-container", {
			slidesPerView: 1,
			spaceBetween: 40,
			watchOverflow: true,
			autoHeight: true,
			observer: true,
			observeParents: true,

			navigation: {
				nextEl: ".tournaments__next",
				prevEl: ".tournaments__prev",
			},

			pagination: {
				el: ".tournaments__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
				},
			},
		});

		let gallerySliders = Array.prototype.slice.call(document.querySelectorAll(".main-galery"));

		if (gallerySliders.length > 0) {
			gallerySliders.forEach((element) => {
				let slidesGallery = element.querySelectorAll(".main-galery__list-item");

				let slidesPer = "auto";
				let initSlide = 2;
				let centerSlide = true;
				let sliderLoop = true;

				if (slidesGallery.length <= 3) {
					slidesPer = 3;
					initSlide = 1;
					centerSlide = false;
					sliderLoop = false;
				}

				let sliderMainGalery = new Swiper(element.querySelector(".main-galery-slider"), {
					slidesPerView: slidesPer,
					spaceBetween: 15,
					centeredSlides: centerSlide,
					initialSlide: initSlide,
					loop: sliderLoop,
					watchOverflow: true,

					navigation: {
						nextEl: element.querySelector(".main-galery__next"),
						prevEl: element.querySelector(".main-galery__prev"),
					},
					pagination: {
						el: element.querySelector(".main-galery__pagination"),
						type: "custom",

						renderCustom: (swiper, current, total) => {
							return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
						},
					},
				});
			});
		}

		let sliderPartners = new Swiper(".partners-slider", {
			fadeEffect: { crossFade: true },
			speed: 1000,
			virtualTranslate: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
			slidersPerView: 1,
			effect: "fade",
			navigation: {
				nextEl: ".partners__next",
				prevEl: ".partners__prev",
			},
			pagination: {
				el: ".partners__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
				},
			},
		});

		let sldierCommon = new Swiper(".common-slider__slider-container", {
			slidesPerView: 1,
			spaceBetween: 15,
			watchOverflow: true,

			navigation: {
				nextEl: ".common-slider__next",
				prevEl: ".common-slider__prev",
			},
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 25,
				},

				1170: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
			pagination: {
				el: ".common-slider__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
				},
			},
		});

		let sliderHistory = new Swiper(".tab-history__slider", {
			slidesPerView: "auto",
			spaceBetween: 30,
			freeMode: true,
			watchOverflow: true,
			observeParents: true,
			observeSlideChildren: true,
			observer: true,

			breakpoints: {
				500: {
					spaceBetween: 60,
				},

				768: {
					spaceBetween: 90,
				},

				1170: {
					spaceBetween: 115,
				},
			},
		});

		let buttonSlides = document.querySelectorAll(".tab-history__tab-button");

		if (buttonSlides.length > 0) {
			buttonSlides.forEach((el) => {
				el.addEventListener("click", function () {
					setTimeout(() => {
						sliderHistory.updateSlides();
						sliderHistory.slideTo(sliderHistory.clickedIndex, 300, false);
					}, 320);
				});
			});
		}

		let sldierPhoto = new Swiper(".photo-slider", {
			slidesPerView: 1,
			spaceBetween: 40,
			watchOverflow: true,
			autoHeight: true,
			observer: true,
			observeParents: true,

			navigation: {
				nextEl: ".photo-slider__next",
				prevEl: ".photo-slider__prev",
			},

			pagination: {
				el: ".photo-slider__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
				},
			},
		});

		let sldierVideo = new Swiper(".video-slider", {
			slidesPerView: 2,
			spaceBetween: 15,
			watchOverflow: true,
			autoHeight: true,
			observer: true,
			observeParents: true,

			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
			},

			navigation: {
				nextEl: ".video-slider__next",
				prevEl: ".video-slider__prev",
			},

			pagination: {
				el: ".video-slider__pagination",
				type: "custom",

				renderCustom: (swiper, current, total) => {
					return `<span class="pagination-current">${current}</span> <span class="pagination-dash"></span> <span class="pagination-total">${total}</span>`;
				},
			},
		});

		let arrGallery = document.querySelectorAll(".lightgallery");

		if (arrGallery.length > 0) {
			arrGallery.forEach((element) => {
				lightGallery(element, {
					selector: "a",
					addClass: "lightGallery-white-theme",
					exThumbImage: "data-external-thumb-image",
					speed: 500,
					plugins: [lgFullscreen, lgThumbnail, lgVideo],
					thumbnail: false,
					zoomFromOrigin: false,
					mobileSettings: {
						controls: false,
						thumbnail: false,
					},
				});
			});
		}

		let datePic = document.querySelector(".litepicker-container");

		let testObj = {
			1633554000000: "2",
			1633986000000: "3",
			1635368400000: "5",
		};

		if (datePic != null) {
			const picker = new Litepicker({
				element: datePic,
				inlineMode: true,
				singleMode: false,
				tooltipText: {
					one: "night",
					other: "nights",
				},
				lang: "ru-RU",
				showTooltip: false,
				setup: (picker) => {
					picker.on("render", (ui) => {
						sizeDate(ui);

						for (key in testObj) {
							let currentEl = ui.querySelector(`[data-time="${key}"]`);

							if (currentEl != null) {
								let elSub = document.createElement("sup");
								elSub.classList.add("day-item-sup");
								elSub.textContent = testObj[key];

								currentEl.innerHTML = `<span>${currentEl.textContent}</span>`;

								currentEl.append(elSub);
							}
						}
					});
				},
			});

			function sizeDate(el) {
				let daysCalendar = el.querySelectorAll(".container__days > div");

				if (daysCalendar.length > 0) {
					daysCalendar.forEach((element, index, array) => {
						element.style.height = Math.ceil(array[0].offsetWidth) + "px";
					});
				}

				window.addEventListener("resize", function () {
					if (daysCalendar.length > 0) {
						daysCalendar.forEach((element, index, array) => {
							element.style.height = Math.ceil(array[0].offsetWidth) + "px";
						});
					}
				});
			}

			sizeDate(datePic);
		}

		// Открытие попапов МОЖНО УДАЛЯТЬ
		let popupAllElem = Array.prototype.slice.call(document.querySelectorAll(".modal"));
		let openButton = Array.prototype.slice.call(document.querySelectorAll(".js-modal-show"));
		let closeButton = Array.prototype.slice.call(document.querySelectorAll(".js-modal-close"));
		let body = document.querySelector("body");

		function openPopup(e) {
			e.preventDefault();
			let modal = document.querySelector(`#${e.target.dataset.popup}`);
			modal.classList.add("active");

			body.classList.add("lock");

			setTimeout(() => {
				modal.style.opacity = "1";
			}, 100);

			if (e.target.classList.contains("--video")) {
				let videoSrc = e.target.dataset.videoSrc;
				let srcIframe = modal.querySelector("iframe").getAttribute("src");

				if (!srcIframe.includes(videoSrc)) {
					modal.querySelector("iframe").setAttribute("src", srcIframe + videoSrc);
				}
			}
		}

		function closePopup() {
			popupAllElem.forEach((element) => {
				if (element.classList.contains("active")) {
					let modal = element;

					setTimeout(() => {
						modal.classList.remove("active");
					}, 300);

					modal.style.opacity = "0";

					body.classList.remove("lock");
				}
			});
		}

		if (openButton != null) {
			openButton.forEach((element) => {
				element.addEventListener("click", (e) => {
					closePopup(e);

					openPopup(e);
				});
			});
		}

		if (closeButton != null) {
			closeButton.forEach((element) => {
				element.addEventListener("click", (e) => {
					closePopup();
				});
			});
		}

		if (popupAllElem != null) {
			popupAllElem.forEach((element) => {
				element.addEventListener("click", (e) => {
					if (e.target.classList.contains("modal")) {
						closePopup();
					}
				});
			});
		}
	},
	false
);

$(document).ready(function () {
	// Клон элементов в мобильное меню

	$.each($(".js-mobile-menu > li"), function (index, val) {
		if (!$(this).hasClass("--not-move")) {
			let clone = $(val).clone();
			$("#menu > ul").append(clone);
		}
	});

	let arrLinkSocial = [];

	$.each($(".footer-contact__list-social"), function (index, val) {
		let clone = $(val).clone();
		arrLinkSocial.push(clone[0]);
	});

	// Активация мобильного меню

	$("#menu").mmenu({
		extensions: ["pagedim-black", "position-left"],
		navbar: { title: "Меню" },
		navbars: [
			{
				position: "bottom",
				content: arrLinkSocial,
			},
		],
	});

	var $menu = $("#menu");
	var $icon = $(".mobile-menu");
	var API = $menu.data("mmenu");

	function openMenu() {
		API.open();
	}

	function closeMenu() {
		API.close();
	}
	$icon.on("click", openMenu);
	API.bind("open:finish", function () {
		$icon.addClass("is-active");
		$("html").addClass("lock");
	});
	API.bind("close:finish", function () {
		$icon.removeClass("is-active");
		$("html").removeClass("lock");
	});

	// ПЛАВНЫЙ ЯКОРЬ
	$(".js-anchor").click(function () {
		let target = $(this).attr("href");
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top - 150,
			},
			800
		);
		return false;
	});

	// Клон категорий
	$.each($(".card-category"), function (index, val) {
		$(".category__mobile-list").append($(val).clone());
	});

	$(".category__all").on("click", function () {
		$(".category__mobile").addClass("active");
		$("body").addClass("lock");
	});

	$(".category__mobile-close").on("click", function () {
		$(".category__mobile").removeClass("active");
		$("body").removeClass("lock");
	});

	//===============ANIMATION SCROLL======================
	const animItems = $(".anim-items");

	if (animItems.length > 0) {
		$(window).on("scroll", animOnScroll);
		function animOnScroll() {
			$.each(animItems, function (index, val) {
				const animItem = animItems.eq(index);
				const animItemHeight = animItem.innerHeight();
				const animItemOffset = animItem.offset().top;
				const animStart = 10; // начало анимации при достижении скролом 1/10 части элемента

				let animItemPoint = $(window).height() - animItemHeight / animStart;

				if (animItemHeight > $(window).height()) {
					animItemPoint = $(window).height() - $(window).height() / animStart;
				}

				if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
					animItem.addClass("animate");
				} else {
					if (!animItem.hasClass("anim-no-scrollTop")) {
						animItem.removeClass("animate");
					}
				}
			});
		}
		setTimeout(animOnScroll, 0);
	}

	$.each($(".js-slide-container"), function (index, val) {
		let visableEl = $(val).attr("data-visable-el");
		if ($(val).find(".js-item-slide").length > visableEl) {
			$.each($(val).find(".js-item-slide"), function (index, val) {
				if (index > visableEl - 1) {
					$(val).addClass("--hidden");
				}
			});

			$(val).find(".js-button-wrap").addClass("--show");

			$(val)
				.find(".js-button-all")
				.on("click", function () {
					$.each($(val).find(".js-item-slide"), function (index, val) {
						if (index > visableEl - 1) {
							$(val).slideToggle();
							$(val).toggleClass("--hidden");
						}
					});

					if ($(this).hasClass("active")) {
						$(this).removeClass("active");
						$(this).text("Показать еще");
					} else {
						$(this).addClass("active");
						$(this).text("Скрыть");
					}
				});
		} else {
			$(val).find(".js-button-wrap").removeClass("--show");
		}
	});

	$(document).on("change", function (e) {
		let element = $(e.target);
		let elem_name = element.attr("type");

		if (element.hasClass("js-file") || elem_name == "file") {
			element.parent().find(".js-file-name").text(element[0].files[0].name);
		}
	});

	$("select").niceSelect();

	// Позиция хинтов

	function positionHint() {
		$.each($(".js-hint"), function (index, val) {
			let indentRight = $(window).width() - ($(val).find(".js-hint-popup").offset().left + $(val).find(".js-hint-popup").outerWidth());
			let indentLeft = $(val).find(".js-hint-popup").offset().left;

			if ($(val).find(".js-hint-popup").hasClass("--right") && indentRight >= $(val).find(".js-hint-popup").outerWidth()) {
				$(val).find(".js-hint-popup").removeClass("--right");
			}

			if (indentRight <= 0) {
				$(val).find(".js-hint-popup").addClass("--right");
			}

			if ($(val).find(".js-hint-popup").hasClass("--left") && indentLeft >= $(val).find(".js-hint-popup").outerWidth()) {
				$(val).find(".js-hint-popup").removeClass("--left");
			}

			if (indentLeft <= 0) {
				$(val).find(".js-hint-popup").addClass("--left");
			}
		});
	}

	positionHint();

	$(window).on("resize", positionHint);

	// Скрипт табов
	$(".js-tab").on("click", function (e) {
		e.preventDefault();

		let elementId = $(this).attr("href");

		$(this).parents(".js-tab-container").find(".js-tab").removeClass("active");

		$(this).addClass("active");

		new Promise((resolve, reject) => {
			$(elementId).parents(".js-tab-container").find(".js-tab-item").removeClass("active");
			setTimeout(() => {
				$(elementId).parents(".js-tab-container").find(".js-tab-item").css({ display: "none" });
				resolve();
			}, 200);
		}).then(() => {
			setTimeout(() => {
				$(elementId).addClass("active");
			}, 100);

			$(elementId).css({ display: "block" });
		});
	});

	$(".js-tab").eq(0).click();

	// Расставляем точки на карте
	function mapHint() {
		$.each($(".map-hint"), function (index, val) {
			let coordinatesTop = $(val).attr("data-coordinates-top");
			let coordinatesLeft = $(val).attr("data-coordinates-left");

			$(val).css({ top: coordinatesTop, left: coordinatesLeft });
		});
	}

	mapHint();

	// Раскрытие турниров

	$.each($(".card-calendar"), function (index, val) {
		if ($(val).hasClass("js-toggle")) {
			$(val)
				.find(".card-calendar__title")
				.on("click", function () {
					$(val).find(".card-calendar__group-two").slideToggle();

					setTimeout(() => {
						$(val).toggleClass("active");
					}, 400);
				});
		} else {
			if (!$(val).hasClass("active")) {
				$(val).addClass("active");
			}
		}
	});

	// МАСКА ТЕЛЕФОНА
	$("input[type=tel]").inputmask({
		mask: "+7 (Z99) 999-99-99",
		definitions: {
			Z: {
				validator: "[0-6,9]",
			},
		},
	});
});
