$(document).ready(function() {
    $("#nav-placeholder").load("/static-elements/nav.html");
    $("#footer-placeholder").load("/static-elements/footer.html");

    //Init stuff
    $('ul.tabs').tabs('select_tab', 'tab_id');
});

window.onload = function() {
    $("#home-slider").css("visibility", "visible");

    $("#home-slider").glide({
        type: "carousel",
        autoheight: "true"
    });

}