function profileShowInp() {
    $('.edit-item').on('click', function(){
        $(this).addClass('edit-item--show-input');
    });
    $('.edit-cancel').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const elem = $(this).attr('href'); 
        const val = $('[data-attr^="' + elem + '"]').html();
        const elemInner = $('[data-inner^="' + elem + '"]');
        $(elemInner).val(val);

        $('#'+elem).removeClass('edit-item--show-input');
    })
}
module.exports = profileShowInp;