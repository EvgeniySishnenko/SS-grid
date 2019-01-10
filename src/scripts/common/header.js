function header() {
    const headerTop = $('.header__top').height();
   
    $(window).on('scroll', function() {
 
        if ($(window).scrollTop() > headerTop) {
            
                if ($(window).width() > 992) {
                    $('.header').addClass('header__scroll-fixed');
                } 
        } else {
            $('.header').removeClass('header__scroll-fixed');
        }
    });

    $(window).resize(function () {
        if ($(window).width() < '992') {
            $('.header').removeClass('header__scroll-fixed');
        }
    });
    
}

module.exports = header;