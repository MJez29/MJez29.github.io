

$(window).ready(function () {

    //If one of the header buttons are clicked it scrolls to the desired spot
    $("#header li.about").click(function () {
        $("#about").ScrollTo();
    });

    var headerul = $("#header ul");

    $(window).resize(function () {
        if ($(this).width() < 620)
        {
            headerul.hide();
        }
        else
        {
            headerul.show();
        }
    });

    $(window).resize();
});