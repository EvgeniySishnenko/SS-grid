function slider() {
    $('.slider__item:first-child').addClass('active-slide');

    const coloringDots = function(index) {
        $('.slider')
            .find('.slider__dot-item')
            .eq(index)
            .addClass('active__dot')
            .siblings()
            .removeClass('active__dot');
    }


    const generationDot = function() {
        $('.slider__item').each(function(){
            const dot = $('<li>',{
                attr: {
                    class: 'slider__dot-item'
                },
                html: '<div class="slider__dot-circle"></div>'
            });
            $('.slider_dots').append(dot);
        })
    };
    generationDot ();
    const moveSlide = function (container, slideNum) {
        const $this = $(this),
            items = container.find('.slider__item'),
            activeSlide = items.filter('.active-slide'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, duration, function () {
                activeSlide.removeClass('active-slide');
                reqItem.addClass('active-slide');
                coloringDots(slideNum);
            });
        }

    }

    $('.slider__btn').on('click', function(){
        const $this = $(this),
            container = $this.closest('.slider'),
            items = container.find('.slider__item'),
            activeSlide = items.filter('.active-slide'),
            nextItem = activeSlide.next(),
            prevItem = activeSlide.prev();

        if ($this.hasClass('next-svg')){// вперед

            if(nextItem.length) {
                moveSlide(container, nextItem.index());
            }else {
                moveSlide(container, items.first().index()); 
            }

        } else {// назад

            if (prevItem.length) {
                moveSlide(container, prevItem.index());
            } else {
                moveSlide(container, items.last().index());
            }
            
        }

       
    });

    $('.slider_dots').on('click', '.slider__dot-item', function(){
        const $this = $(this),
            container = $this.closest('.slider'),
            index = $this.index();
        moveSlide(container, index);
        coloringDots(index);
    });
    
}
module.exports = slider;