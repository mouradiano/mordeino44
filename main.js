console.log('Hello World!');
// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top": itemPosNewAnimTop.top + "px",
    "left": itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click", "li", function(e) {
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function() {
  setTimeout(function() { test(); });
});
$(window).on('resize', function() {
  setTimeout(function() { test(); }, 500);
});
$(".navbar-toggler").click(function() {
  setTimeout(function() { test(); });
});



$(function() {
  var slider = $(".slider"),
    slides = slider.find('li'),
    nav = slider.find('nav'),
    navA = nav.find('a'),
    cur = 0,
    slideInterval = setInterval(goNext, 4000),
    playing = true;

  slides.eq(cur).addClass('current');

  nav.children('a').eq(cur).addClass('current_dot');

  nav.on('click', 'a', function(event) {
    event.preventDefault();
    cur = $(this).index();
    $(this).addClass('current_dot').siblings().removeClass('current_dot');
    slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
    slides.eq($(this).index()).prevAll().addClass('prev');
    slides.eq($(this).index()).nextAll().removeClass('prev');
  });

  function slideIndex() {
    cur = (cur + slides.length) % slides.length;

  }

  function goNext() {
    // slideIndex()
    cur = cur + 1;
    cur = (cur + slides.length) % slides.length;
    // cur = cur+1;
    console.log(cur);
    navA.eq(cur).addClass('current_dot').siblings().removeClass('current_dot');
    slides.eq(cur).addClass('current').removeClass('prev').siblings().removeClass('current');
    slides.eq(cur).prevAll().addClass('prev');
    slides.eq(cur).nextAll().removeClass('prev');
  }

  $('#next').click(function(e) {
    e.preventDefault();
    goNext();
  })

  function goPrev() {
    console.log(cur)
    cur = cur - 1;
    cur = (cur + slides.length) % slides.length;

    navA.eq(cur).addClass('current_dot').siblings().removeClass('current_dot');
    slides.eq(cur).addClass('current').removeClass('prev').siblings().removeClass('current');
    slides.eq(cur).prevAll().addClass('prev');
    slides.eq(cur).nextAll().removeClass('prev');
  }


  $('#prev').click(function(e) {
    e.preventDefault();
    goPrev();
  })

  slider.mouseenter(pauseSlideshow);
  slider.mouseleave(pauseSlideshow);



  function pauseSlideshow() {
    if (playing) {
      playing = false;
      clearInterval(slideInterval);
    } else {
      playing = true;
      slideInterval = setInterval(goNext, 4000);
    }

  }



});