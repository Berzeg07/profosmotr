$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdownmenu').toggleClass('is-active');
    });

    $('.custom-select select').selectric();
});
