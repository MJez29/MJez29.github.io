//Michal Jez

//Portfolio page

//Called once the webpage has loaded
$(document).ready(function () {

    //Starts transition for the left slider
    setTimeout(function () {
        $("#left").addClass("onscreen");
    }, 1250);

    //Starts transition to load main content
    setTimeout(function () {
        $("#right li").addClass("onscreen");
    }, 250);

    //Called when an image is clicked
    //Since they are small and somewhat stretched, to get a better view they enter fullscreen mode for the user to see the whole picture
    $("#right img").click(function () {

        //Adds the image to the div for these such enlarged images
        $("div.fullscreen").append('<img class="fullscreen" alt="The image clicked at real size" src="' + $(this).attr("src") + '" />');

        //To avoid the presence of 2 y scroll bars in the event that the image's height is greater than that of the screen
        //It hides the one that is present and replaces it with the one for the image
        $("#right").css("overflow-y", "hidden");
        $("body").css("overflow-y", "scroll");

        //Called when the fullscreen image is clicked
        $("img.fullscreen").click(function () {
            //Returns everything back to how it was
            $("#right").css("overflow-y", "auto");
            $("body").css("overflow-y", "hidden");
            $(this).remove();
        });
    });
});