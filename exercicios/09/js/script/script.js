// ANIMAÇÃO NO SCROLL
jQuery(document).ready(function ($) {

	setTimeout(function () {
		$('h1.responsive-headline').fitText(1, {
			minFontSize: '40px',
			maxFontSize: '90px'
		});
	}, 100);

	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});


	$('header').css({
		'height': $(window).height()
	});
	$(window).on('resize', function () {

		$('header').css({
			'height': $(window).height()
		});
		$('body').css({
			'width': $(window).width()
		})
	});

});

function loadHomeImage () {
	let numero_imagens_fundo = 8
	let imagem = `url('images/fundo${Math.floor(Math.random() * numero_imagens_fundo + 1)}.png')`

	document.getElementById('home').style.backgroundImage = imagem
}

function toggleOptions() {
	var options = document.querySelector('.select-options');
	options.style.display = options.style.display === 'block' ? 'none' : 'block';
}