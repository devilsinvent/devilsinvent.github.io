$(document).ready(function() {
    if ($(".navbar").offset().top > 1 || $(window).width() < 768) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 1 || $(window).width() < 768) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var offset = 50;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - offset
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//setting active on navbar
var sections = $('section')
  , nav = $('nav')

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  var nav_height = nav.outerHeight();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

//mobile nav stuff
$(document).on('click', function (e) {
    //close nav bar when links/page is clicked
    if (!$(e.target).is('a') || !$(e.target).hasClass('navbar-toggle')) {
        $('.collapse').collapse('hide');
    }

});

//faq accordion
if($(window).width() < 768) {   //mobile
    $('.faq-col .answer').css('display', 'none');
    $('.faq-col .plus').css('display', 'inline-block');
}

$( window ).resize(function() {
    if($(window).width() < 768) {   //mobile
        $('.faq-col .answer').css('display', 'none');
        $('.faq-col .plus').css('display', 'inline-block');
    } else if($(window).width() >= 768) {
        $('.faq-col .answer').css('display', 'inline-block');
        $('.faq-col .plus').css('display', 'none');
    }
})

$('.faq-col h3').on('click', function () {
    var answer = $(this).siblings('.answer');
    if(answer.hasClass('open')) {
        answer.removeClass('open').slideUp(200);
    } else {
        $(this).siblings('.answer').addClass('open').slideDown(200);
    }

    $(this).children('.plus').toggleClass('rotate');
});
