$('.js-toggle-menu').click(function(e){
	e.preventDefault();
	$(this).siblings().toggle();
});

$('.main-nav li').hover(function(){
	//$(this).find('ul').toggleClass('active');
});
$('.main-nav li').click(function(){
	$(this).find('ul').toggleClass('active');
});
