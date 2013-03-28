$('.js-toggle-menu').click(function(e){
	e.preventDefault();
	$(this).siblings().toggle();
});
$('.nav--primary li').click(function(){
	$(this).find('ul').toggleClass('active');
});

$('.cycle').cycle({ 
	pager: '.carousel__nav',
	pagerAnchorBuilder: function(idx, slide) {
        // return sel string for existing anchor
        return '.carousel__nav li:eq(' + (idx) + ') a';
    },
    before:   function(){
    	dataPosition = $(this).attr('data-carousel-position');
    	$('[data-carousel-position]').removeClass('active');
    	$('[data-carousel-position="'+dataPosition+'"]').addClass('active');
    } 
 });
