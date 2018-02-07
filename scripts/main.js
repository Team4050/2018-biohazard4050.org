$(document).ready(function() {
    $("#nav-placeholder").load("/static-elements/nav.html");
    $("#footer-placeholder").load("/static-elements/footer.html");

    //Init stuff
    $(".tabs").tabs();
});

window.onload = function() {
    $("#home-slider").css("visibility", "visible");

    $("#home-slider").glide({
        type: "carousel",
        autoheight: "true"
    });

}