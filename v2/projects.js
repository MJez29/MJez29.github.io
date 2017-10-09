function makeProject(name, description, src, link, col)
{
    this.name = name;
    this.description = description;
    this.src = src;
    this.link = link;
    this.col = col;
    return this;
}

var projects = [
    new makeProject(
        "Rubik's Cube Solver",
        "Finally solve that cube that's been gathering dust on your shelf for the past 5 years",
        "img/rubiks.jpg",
        "https://",
        "#FCF7F8"),
    new makeProject(
        "Brain Force One",
        "Think programming is hard? Give Brainfuck a whirl",
        "img/bf1.jpg",
        "https://",
        "#A31621"),
    new makeProject(
        "Note-HB",
        "Enhance classroom learning with this tool",
        "img/note-hb.jpg",
        "https://",
        "#4E8098")
];

var proj;           //The currents index of projects

$(window).ready(function () {
    proj = 0;



    var i = 1;
    $("#projects img").attr("src", projects[i].src);
    $("#projects a").attr("href", projects[i].link);
    $("#projects h3").html(projects[i].name);
    $("#projects h3").css("color", projects[i].col);
    $("#projects p").html(projects[i].description);
    //$("#projects p").css("color", projects[i].col);
});