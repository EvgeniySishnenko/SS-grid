function showBlockForgot() {
    let offset = $('.block__account').offset();
    let width = $(window).width();
    
    $(window).resize(function () {
        offset = $('.block__account').offset();
        width = $(window).width();
    });

    
    $('.forgot--link').on('click', function (e) {
        e.preventDefault();
        $('.forgot').addClass('forgot-active');        
        if (width <= '984') {
            $('body,html').animate({ scrollTop: offset.top }, 400);
        }
    });

    $('.forgot__close').on('click', function () {
        $('.forgot').removeClass('forgot-active');
    });
    $('.forgot-closed--link').on('click', function () {
        $('.forgot').removeClass('forgot-active');
    });

}

module.exports = showBlockForgot;