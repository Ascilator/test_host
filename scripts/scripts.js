
jQuery(function () {
	$('.burger_menu').on('click', function(){
		
		$('.burger').toggleClass('_active_bu');
		$('.burger_before').toggleClass('_active_bef_bu');
		$('.burger_after').toggleClass('_active_af_bu');
		$('.menu').toggleClass('responsive');
		$('.black_back').toggleClass('_active_black_back');
	});
	
	$('#_1 ._form').on('focus', function(){		
		if ($(this).val() == 'E-mail' || $(this).val() == 'Имя' || $(this).val() == 'Телефон') {
			$(this).val('');
		}
	});


	$('#_1 ._form').on('blur', function(){
			if ($(this).val() == '') {
				if($(this).attr('val') == '1'){
					$(this).val('Имя');
				}
				if($(this).attr('val') == '2'){
					$(this).val('Телефон');
				}
				if($(this).attr('val') == '3'){
					$(this).val('E-mail');
				}
			}
	});



	$('#_2 ._form').on('focus', function(){		
		if ($(this).val() == 'E-mail'  || $(this).val() == 'Телефон') {
			$(this).val('');
		}
	});

	$('#_2 ._form').on('blur', function(){
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Телефон');
			}
			if($(this).attr('val') == '3'){
				$(this).val('E-mail');
			}
		}
	});


});











$(document).ready(function(){
		if($('.what_projects').width() <= 1100){
			$('.what_projects__slick_body').slick({
				slidesToShow: 1,
				arrows: false,
				infinity: true,
				variableWidth: true,
				//appendArrows: $('.slick_body'),
				//nextArrow: '<div class="slick_arrow _next"><img src="img/expertise/arrow.png" alt=""></div>',
				//prevArrow: '<div class="slick_arrow _prev"><img src="img/expertise/arrow.png" alt=""></div>',
				rows: 0,
				speed: 300,
				easing: 'ease',
				waitForAnimate: false,
				touchMove: true,
				

			});
			$('.csr_slider_body').slick({
				slidesToShow: 1,
				arrows: false,
				infinity: true,
				variableWidth: true,
				//appendArrows: $('.slick_body'),
				//nextArrow: '<div class="slick_arrow _next"><img src="img/expertise/arrow.png" alt=""></div>',
				//prevArrow: '<div class="slick_arrow _prev"><img src="img/expertise/arrow.png" alt=""></div>',
				rows: 0,
				speed: 300,
				easing: 'ease',
				waitForAnimate: false,
				touchMove: true,
				

			});
			
			$('.changing_slider_body').slick({
				slidesToShow: 1,
				arrows: false,
				infinity: false,
				variableWidth: true,
				//appendArrows: $('.slick_body'),
				//nextArrow: '<div class="slick_arrow _next"><img src="img/expertise/arrow.png" alt=""></div>',
				//prevArrow: '<div class="slick_arrow _prev"><img src="img/expertise/arrow.png" alt=""></div>',
				rows: 0,
				speed: 300,
				easing: 'ease',
				waitForAnimate: false,
				touchMove: true,
				

			});

		}
	});