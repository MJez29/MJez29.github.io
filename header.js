

$(window).ready(function () {

    //If one of the header buttons are clicked it scrolls to the desired spot
    $("#header li.about").click(function () {
        $(window).scrollTo($("#about"), 500);
    });

    var headerul = $("#header ul");
    var headerh1 = $("#header h1");

    $(window).resize(function () {
        if ($(this).width() < headerul.width() + headerh1.width() + 30)
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