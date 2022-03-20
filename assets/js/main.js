// INIT
$(window).on('load resize scroll',function(){

});

$(window).on('load resize',function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 768) {

    }
});

$(function() {
    spMenu();
    artistSlider();
});


// FUNCTIONS
function artistSlider() {
    var splide = new Splide( '.splide', {
        type    : 'loop',
        perPage : 7,
        focus  : 'center',
        pagination: false,
        breakpoints: {
            768: {
              perPage: 3,
            },
        }
    } );
      
    splide.mount();
}

function spMenu() {
    $('.header__nav__menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.header__nav__list').slideToggle();
    });
}