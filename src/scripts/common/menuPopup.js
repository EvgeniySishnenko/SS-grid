function menuPopup() {
    $('.btn__mobile').on('click', function() {
        $('.block__menu__mobile').addClass('block__menu__mobile--active');
    });
    $('.block__right').on('click', function () { 
        $('.block__menu__mobile').removeClass('block__menu__mobile--active');
    });
    $('.btn__plus').on('click', function (e) {
        const target = getCurrentZone(e.target);
        $(target).toggleClass('btn__plus--active');
        $(target).parent(".wrap__link-plus").next().toggle(500);
    });


    $('.header__menu--item')
        .each(function () { if (this.getElementsByTagName("a")[0].href == location.href) this.className = "header__menu--item header__menu--item-active"; });
    $('.menu__mobile--item')
        .each(function () { if (this.getElementsByTagName("a")[0].href == location.href) this.className = "menu__mobile--item menu__mobile--item-active"; });
}
// функция определения зоны в которой находится item
function getCurrentZone(from) {
    do {
        if (from.classList.contains('btn__plus')) {
            return from;
        }
    } while (from = from.parentElement);
}
module.exports = menuPopup;