//Michal Jez

//Home page

//Called once the webpage has loaded
$(document).ready(function () {
    
    //Checks to see if the text "visited" is in the url
    //There's slightly different fading in transitions that occur based on whether or not it is
    try {
        //For most browsers
        if ("visited".includes(window.location.href)) {
                $("body").css('background-image', 'url("img/bg.png")');
            }
    } catch (e) {
        //For IE
        match = false;
        url = window.location.href;
        for (var i = 0; i < url.length - "visited".length + 1; i++) {
            console.log(url.substr(i, "visited".length));
            if (url.substr(i, "visited".length) == "visited") {
                console.log("MATCH");
                match = true;
                break;
            }
        }
        if (match) {
            $("body").css('background-image', 'url("img/bg.png")');
        }
    }

    //Left Nav
    setTimeout(function () {
        $("#left").addClass("onscreen");
    }, 1000);
    
    resizeBG();
    $("#bg").addClass("onscreen");
});

//If the window is resized it resizes the background as well
$(window).resize(resizeBG);

//Resizes the background so that the image covers the entire back of the webpage
function resizeBG() {
    if ($(window).width() >= $(window).height() * 1.7777777778) {
        console.log("Screen width >= height");
        $("#bg").css({ width: "100%", height: "auto" })
    }
    else {
        console.log("Screen height > width");
        $("#bg").css({ width: "auto", height: "100%" })
    }
}