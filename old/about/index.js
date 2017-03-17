//about/index.js
//MichalJez.ca
//Michal Jez

//Functions used by the webpage

//Once page is ready
$(document).ready(function () {
    
    //After 4.5s the left nav floats onscreen
    setTimeout(function () {
        $("#left").addClass("onscreen");
    }, 4500);
    
    //Displays text as though its been typed
    setTimeout(slowPrint, 500, $("#motto"), "Try, Learn, Improve", 0, 100);

    //Where the text "-My dad" will go
    setTimeout(function () {
        $("#motto-by").addClass("onscreen");
    }, 2000);

    //Paragraph 1 slides onscreen
    setTimeout(function () {
        $("#about p:nth-of-type(1)").addClass("onscreen");
    }, 2250);

    //Paragraph 2 follows slightly staggered in timing
    setTimeout(function () {
        $("#about p:nth-of-type(2)").addClass("onscreen");
    }, 2750);

    //The header containing my dad's quote
    setTimeout(function () {
        $("#about div:nth-of-type(1)").addClass("onscreen");
    }, 100);
});

//Recursively prints the passed in string with a delay in between each character to simulate someone typing
function slowPrint(obj, str, pos, speed) {
    obj.append(str.charAt(pos));
    if (pos < str.length - 1) {
        setTimeout(slowPrint, speed, obj, str, pos + 1, speed);
    }
    else if (str.charAt(pos) == "e") {
        //Not a universal function, only designed to work for the specified text
        setTimeout(slowPrint, 250, $("#motto-by"), "-My dad", 0, 200);
    }
}