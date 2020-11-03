$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdownmenu').toggleClass('is-active');
    });

    $('.custom-select select').selectric();

    var swiper = new Swiper('.blockinfo__gallery', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $(function () {
        if (window.matchMedia('(min-width: 1280px)').matches) {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= 140) {
                    $('.headerdes-sticky').addClass('is-active');
                }
                else {
                    $('.headerdes-sticky').removeClass('is-active');
                }
            });
        }
    });
});
