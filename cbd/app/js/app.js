document.addEventListener("DOMContentLoaded", function () {

	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			/* Toggle between adding and removing the "active" class,
			to highlight the button that controls the panel */
			this.classList.toggle("active");

			/* Toggle between hiding and showing the active panel */
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}

	// SWITCH TABS	

	$(function () {
		let tab = $('.tab-menu__show-tab-menu >div');
		tab.hide().filter(':first-child').show();

		// Клики по вкладкам.
		$('.show-title-menu__anchor').click(function () {
			tab.hide();
			tab.filter(this.hash).show();
			$('.show-title-menu__anchor ').removeClass('anchor--active');
			$(this).addClass('anchor--active');
			return false;
		}).filter(':first').click();

		// Клики по якорным ссылкам.
		$('.tabs-target').click(function () {
			$('.show-title-menu__anchor[href=' + $(this).data('id') + ']').click();
		});
	});

	// SLICK SLIDER

	$('.product__carousel').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 4,
		arrows: true,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 424,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 4,
					infinite: true,
					centerMode: true,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 325,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 4,
					infinite: true,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.feedback__carousel-body').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3500
	});

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});