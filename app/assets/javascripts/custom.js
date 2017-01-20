jQuery(document).ready(function(){

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=60){
			$("header").addClass('dark-grey-bg');
		}
		else
			if($("header").hasClass('dark-grey-bg')){
				$("header").removeClass('dark-grey-bg');
			}
	});

	$('#menu').slicknav({
		label:'',

	});





});