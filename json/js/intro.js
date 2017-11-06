slowPrint = (obj, str, delay, end) => {
    if (str === "") {
        setTimeout(end, delay);
    } else {
        obj.append(str[0]);
        setTimeout(slowPrint, delay, obj, str.substr(1), delay, end);
    }
}

goToCode = () => {
    let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $("#terminal-container").addClass("animated slideOutUp").one(animationEnd, () => {
        $("#terminal-container").remove();
        $("#code").removeClass("hidden").addClass("animated slideInUp");
    });
}

$(document).ready(() => {
    setTimeout(slowPrint, 500, $("#terminal"), "./michal-jez", 200, goToCode);
})