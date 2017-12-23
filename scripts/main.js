$(document).ready(function(){
//  After everything is loaded...
window.onload = function() {
  // Initialize the slider
  $('#slider').glide({type: 'carousel'});
};

  $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });

// Side Nav
$(".button-collapse").sideNav();

// Initialize Carousel Slider
$('.carousel.carousel-slider').carousel({fullWidth:true});

    
// Activate Dropdown Menu
$(".dropdown-button").dropdown({hover: true});
});