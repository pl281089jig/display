;(function($){
		$('.ba-slider').slick({ /*глвный слайдер*/
			dots:false, /*точки убрать*/
			arrows: false, /*кнопки выкл*/
});
		 $('.ba-portfolio-slider__title').slick({ /*name of slider*/
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: true,
				  fade: true, /*способ смены слайда (просто меняется текст)*/
				  asNavFor: '.ba-portfolio-slider__slides' /*связать с другим слайдером*/
});
		$('.ba-portfolio-slider__slides').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  asNavFor: '.ba-portfolio-slider__title',
			  dots: false,
			  centerMode: true,
			  focusOnSelect: true,
			  arrows:false,
});


		 $(window).load(function(){
		var $mapDiv = $('#map')[0];
		var $map = new google.maps.Map($mapDiv, {
			center: {lat: 52.133214, lng: -106.670046},
			zoom: 8,
		});

		var $marker = new google.maps.Marker({
			position: {lat: 52.133214, lng: -106.670046},
			map: $map,
			icon:'img/contact/marker.png'
		});

	})

})(jQuery);

