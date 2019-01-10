function showBlockReg () {
    let height = $('.block__account').height();

    $(window).resize(function () {
        if ($(window).width() <= '984') {
            height = $('.block__account').height();
        } else if ($(window).width() >= '984') {
            height = $('.block__account').height();
        }
    });


    $('.create--button').on('click', function(e) {
        e.preventDefault();
        $('.wrap__reg').addClass('wrap__reg-active');  
        $('body,html').animate({ scrollTop: height}, 400); 
    });
    $('.reg__close').on('click', function () {
        $('.wrap__reg').removeClass('wrap__reg-active');
        $('body,html').animate({ scrollTop: 0 }, 400); 
    });
    $('.reg-closed--link').on('click', function () {
        $('.wrap__reg').removeClass('wrap__reg-active');
        $('body,html').animate({ scrollTop: 0 }, 400); 
    });
    
}

module.exports = showBlockReg;