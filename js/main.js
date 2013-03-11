$('.js-toggle-menu').click(function(e){
	e.preventDefault();
	$(this).siblings().toggle();
});
