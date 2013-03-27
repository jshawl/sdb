$('.js-toggle-menu').click(function(e){
	e.preventDefault();
	$(this).siblings().toggle();
});
$('.nav--primary li').click(function(){
	$(this).find('ul').toggleClass('active');
});

$('.cycle').cycle({ 
    before:   function(){
    	dataPosition = $(this).attr('data-position');
    	$('[data-position]').removeClass('active');
    	$('[data-position="'+dataPosition+'"]').addClass('active');
    } 
 });
