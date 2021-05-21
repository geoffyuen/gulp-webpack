import 'slick-carousel';
console.log('slider');
(function ($) {
	console.log('jQuery ready!');
	// On swipe event
	$('.your-element').on('swipe', function (event, slick, direction) {
		console.log(direction);
		// left
	});

	// On edge hit
	$('.your-element').on('edge', function (event, slick, direction) {
		console.log('edge was hit')
	});

	// On before slide change
	$('.your-element').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		console.log(nextSlide);
	});
	$(".slider").slick({

		// normal options...
		infinite: false,

		// the magic
		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true
			}

		}, {

			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				dots: true
			}

		}, {

			breakpoint: 300,
			settings: "unslick" // destroys slick

		}]
	});
})(jQuery);