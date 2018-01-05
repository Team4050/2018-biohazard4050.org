$(document).ready(function(){
  $(document).ready(function() {
    $("#lightSlider").lightSlider(); 
  });

  $("#nav-placeholder").load("static-elements/nav.html");
  $("#footer-placeholder").load("static-elements/footer.html");

  //Init stuff
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.carousel.carousel-slider').carousel({fullWidth:true});
});