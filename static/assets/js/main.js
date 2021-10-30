// import $ from 'jquery'

/********Scroller**********/
  
//   $(".scrollTo").on('click', function(e) {
//        e.preventDefault();
//        var target = $(this).attr('href');
//        $('html, body').animate({
//          scrollTop: ($(target).offset().top)
//        }, 1000);
//     });
    
//     $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
//       if (!$(this).next().hasClass('show')) {
//         $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
//       }
//       var $subMenu = $(this).next('.dropdown-menu');
//       $subMenu.toggleClass('show');
    
    
//       $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
//         $('.dropdown-submenu .show').removeClass('show');
//       });
    
    
//       return false;
//     });
    
// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:1
//       },
//       1000:{
//           items:1
//       }
//   }
// })

/********Tab-Form**********/

$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    });
    
    $(".submit").click(function(){
    return false;
    })
    
    });

/********PriceScale**********/

function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByClassName("range_input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByClassName("range_input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }
    
/********Header**********/

// (function($){
// 	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
// 	  if (!$(this).next().hasClass('show')) {
// 		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
// 	  }
// 	  var $subMenu = $(this).next(".dropdown-menu");
// 	  $subMenu.toggleClass('show');

// 	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
// 		$('.dropdown-submenu .show').removeClass("show");
// 	  });

// 	  return false;
// 	});
// })(jQuery)



// $( document ).ready(function() {
//   alert( "ready!" );
//   console.log("hello")
// });
// $('.single-item').slick();


// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: false,
//     arrows: false,
//     centerMode: true,
//     focusOnSelect: true
// });


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


$(document).ready(function() {
  $('#login_close').on( "click", function( ){
    $('#signupModal').removeClass("show").attr("style", "display:none");
    console.log("signin")
    $('.modal-backdrop').removeClass("show").attr("style", "display:none");
    $('#signinModal').addClass("show hell");
  });
$('#signup_close').on( "click", function(){
  $('#signinModal').removeClass("show").attr("style", "display:none");
  $('.modal-backdrop').removeClass("show").attr("style", "display:none");
  $('#signupModal').addClass("show hell");
  console.log("signup")
});

});