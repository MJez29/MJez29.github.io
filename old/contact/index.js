/*
    Michal Jez

    Contact page
*/

//Called once the webpage has loaded
$(document).ready(function () {

    //Left nav
    setTimeout(function () {
        $("#left").addClass("onscreen");
    }, 1250);

    //Profile picture
    setTimeout(function () {
        $("#profile-pic").addClass("onscreen");
    }, 250);

    //Rounded box that contains links
    setTimeout(function () {
        $("#header").addClass("onscreen");
    }, 2750);

    //Links
    setTimeout(function () {
        $("#header *").addClass("onscreen");
    }, 4000);

    //Thank you and email
    setTimeout(function () {
        $("#right h1").addClass("onscreen");
        $("#right h2").addClass("onscreen");
    }, 4500);
});