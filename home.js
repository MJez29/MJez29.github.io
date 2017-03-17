function resizeBG()
{

}

function ease(x)
{
    return x * x * x / 0.8;
}

$(document).ready(function () {

    var header = $("#header");
    var win = $(window);

    $(window).scroll(function () {
        //$("#scroll").html($(window).scrollTop());
        var scrtop = win.scrollTop();
        var winheight = win.height();
        
        if (scrtop >= winheight - 65)
        {
            header.css({
                position: "fixed",
                top: "0px",
                bottom: "auto"
            });
            header.css("background-color", "rgb(163,22,33)");
        }
        else
        {
            header.css({
                position: "absolute",
                top: "auto",
                bottom: "5px"
            });
            header.css("background-color", "rgba(163,22,33," + ease(scrtop / winheight) + ")");
        }
    })
});