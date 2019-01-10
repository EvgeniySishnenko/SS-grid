function confirmCartShow() {
    $('.block__button--show-confirm-right').on('click', function(){
        $('.block__button--show-confirm-right').toggleClass('block__button--show-confirm-right--active')
        $('.confirm-right').toggle();
    });
}
module.exports = confirmCartShow;