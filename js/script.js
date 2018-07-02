$(document).ready(function() {
    /* vertical_slide */
    $('.vertical_slide').slick({
        vertical: true,
        arrows: false,
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.ps__list').slick({
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.header__phone').on('click', function (e) {
        e.preventDefault();
        $('.header__phone--inner').slideDown();
    });
    $('.header__phone--inner .btn__slide-up').on('click', function (e) {
        e.preventDefault();
        $('.header__phone--inner').slideUp();
    });
    $('.header__top .btn.btn--light').on('click', function (e) {
        e.preventDefault();
        $('.feedback').addClass('active');
    });
    $('.btn__fb-close').on('click', function (e) {
        e.preventDefault();
        $('.feedback').removeClass('active');
        $('.order').removeClass('active');

    });
    $('.el-footer .btn.btn--darck').on('click', function (e) {
        e.preventDefault();
        $('.feedback').addClass('active');
    });
    $('.product_btn').on('click', function (e) {
        e.preventDefault();
        $('.order').addClass('active');
    });
    $('.fb__coll-me').hide();
    $('.btn_mesenge').on('click', function (e) {
        e.preventDefault();
        $('.btn_coll-me').removeClass('active');
        $(this).addClass('active');
        $('.fb__mesenge').slideDown();
        $('.fb__coll-me').slideUp();
    });
    $('.btn_coll-me').on('click', function (e) {
        e.preventDefault();
        $('.btn_mesenge').removeClass('active');
        $(this).addClass('active');
        $('.fb__mesenge').slideUp();
        $('.fb__coll-me').slideDown();
    });
    $('.btn__mobile-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $('.el-menu__mobile').slideToggle();
    });
    $('.el-menu__mobile .category').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('mobile__body');
        setTimeout(function() {   $('.el-menu__mobile').slideUp(); }, 1000);
        $('.btn__mobile-menu').removeClass('close');
        $('.mobile__category').addClass('open');
    });
    $('.mobile__category .btn__close').on('click', function (e) {
        e.preventDefault();
        $('.el-body').removeClass('mobile__body');
        $('.mobile__category').removeClass('open');
        $('.ctg__item--folder .ctg__linck').siblings('.ctg__list').slideUp();
    });
    $('.header__nav .category').on('click', function (e) {
        e.preventDefault();
        $('.ctg__list--closed').slideToggle();
        $('.ctg__item--folder .ctg__linck').siblings('.ctg__list').slideUp();
    });
    $('.mobile__category  > .ctg__list.modern-skin').mCustomScrollbar({
        axis:"y"
    });
    $('.feedback.modern-skin .fb__holder').mCustomScrollbar({
        axis:"y"
    });
    $('.order.modern-skin .fb__holder').mCustomScrollbar({
        axis:"y"
    });
    $('.main-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.smal-img'
    });
    $('.smal-img').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipeToSlide: true,
        asNavFor: '.main-img',
        focusOnSelect: true
    });

    $('.ctg__item--folder > .ctg__linck').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.ctg__list').slideToggle();
    });
    $('.ctg__item--folder .ctg__list .ctg__item >.ctg__linck').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.ctg__list').slideToggle();
    });

});