;(function($){
		$('.ba-slider').slick({ /*глвный слайдер*/
			dots:false, /*точки убрать*/
			arrows: false, /*кнопки вкл*/
			});

		$('.ba-portfolio-slider').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  asNavFor: '.ba-portfolio-slider__title',
			  dots: true,
			  centerMode: true,
			  focusOnSelect: true
});
		 $('.ba-portfolio-slider__title').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.ba-portfolio-slider'
});


		 $(window).load(function(){
		var $mapDiv = $('#map')[0];
		var $map = new google.maps.Map($mapDiv, {
			center: {lat: 52.133214, lng: -106.670046},
			zoom: 15
		});

		var $marker = new google.maps.Marker({
			position: {lat: 52.133214, lng: -106.670046},
			map: $map,
			icon:'img/contact/marker.svg'
		});

		$infowindow.open($map, $marker);
	})
})(jQuery);

