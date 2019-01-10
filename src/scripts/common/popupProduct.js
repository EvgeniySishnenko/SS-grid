function popupProduct () {
    $('.add-magnifier--link').on('click', function(e){
        e.preventDefault();
        $('.popup__product').addClass('popup__product--active');
    })
    $('.popup__product--closed').on('click', function () {
     
        $('.popup__product').removeClass('popup__product--active');
    })
}
module.exports = popupProduct;