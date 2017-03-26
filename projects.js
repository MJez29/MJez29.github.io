function makeProject(name, description, src, link)
{
    this.name = name;
    this.description = description;
    this.src = src;
    this.link = link;
    return this;
}

var projects = [
    new makeProject(
        "Rubik's Cube Solver",
        "Finally solve that cube that's been gathering dust on your shelf for the past 5 years",
        "img/rubiks.jpg",
        "https://"),
    new makeProject(
        "Brain Force One",
        "Think programming is easy? Give Brainfuck a whirl",
        "img/bf1.jpg",
        "https://"),
    new makeProject(
        "Note-HB",
        "Enhance classroom learning with this tool",
        "img/note-hb.jpg",
        "https://"
        )
];

var proj;           //The currents index of projects

$(window).ready(function () {
    proj = 0;



    var i = 0;
    $("#projects img:not(.fg)").attr("src", projects[i].src);
    $("#proj-info h3").html(projects[i].name);
    $("#proj-info p").html(projects[i].description);
});