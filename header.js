

$(window).ready(function () {
    console.log("HEY");
    $("#header li.about").click(function () {
        $("#about").ScrollTo();
    });
});