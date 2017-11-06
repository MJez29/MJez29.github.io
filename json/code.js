console.log("Hello, World!");

class MichalJez {

    constructor() {
        about = "I'm a passionate software developer with an interest in web development";

        // What I've used before
        getSkills();

        // What I've made
        getProjects();

        // Feel free to get in touch
        let me = this;
        contact(me);
    }

    getSkills() {
        return {
            programmingLanguages: [
                "Javascript",
                "Python",
                "Java",
                "C",
                "C#",
                "C++",
                "Typescript",
                "Brainf*ck"         // The next big thing
            ],
            frameworks: [
                "Node.js",
                "Express.js",
                "Unity3D",
                "Angular.js",
                "Git",
                "Yelp API",
                "Pygame",
                "Swing"
            ]
        }
    }

    getProjects() {
        return [
            {
                title: "CoffeeClock",
                shortDesc: "A wirelessly controlled coffee maker",
                dates: {
                    start: "October 2017",
                    end: "Present"
                },
                description: "An automated Keurig machine that begins brewing you a cup of coffee when you turn off your alarm",
                technologies: [ "Javascript", "Node.js", "Express.js", "Python", "Raspberry Pi" ]
            },
            {
                title: "WATonomous Website",
                shortDesc: "Designed the contact page",
                link: "https://watonomous.ca",      // New website not live yet
                dates: {
                    start: "October 2017",
                    end: "October 2017"
                },
                description: "Designed the contact page for the revamped University of Waterloo student design team WATonomous' website"
            },
            {
                title: "RestauranTinder",
                shortDesc: "A web app to find restaurants faster",
                link: "https://still-brushlands-76890.herokuapp.com/",
                dates: {
                    start: "June 2017",
                    end: "August 2017"
                },
                description: "An API and web app that offers smart restaurant recommendations with data from the Yelp API",
                technologies: [ "Node.js", "Express.js", "Angular.js", "Yelp API" ]
            },
            {
                title: "Rubik's Cube Solver",
                shortDesc: "A program that gives a step-by-step solution to solve a cube",
                link: "https://github.com/MJez29/Rubiks-Cube-Solver/tree/master/Downloads",
                dates: {
                    start: "December 2016",
                    end: "February 2017"
                },
                technologies: [ "Unity3D", "C#" ]
            },
            {
                title: "BrainForce 1",
                shortDesc: "A text editor with a built-in Brainf*ck compiler",
                link: "https://github.com/MJez29/Brain-Force-1",
                dates: {
                    start: "October 2016",
                    end: "December 2016"
                },
                technologies: [ "Java", "C++", "Swing", "Brainf*ck" ]
            },
            {
                title: "NoteHB",
                shortDesc: "A collaborative, live note-taking app",
                link: "https://devpost.com/software/notehb-r2fvpn",
                dates: {
                    start: "September 2016",
                    end: "September 2016"
                },
                technologies: [ "Node.js", "Javascript", "Text-to-speech API" ]
            },
            {
                title: "Terrain Generator",
                shortDesc: "A 2D side-view terrain generator",
                dates: {
                    start: "June 2016",
                    end: "August 2016"
                },
                technologies: [ "C#", "Unity3D", "Perlin Noise", "Simplex Noise" ]
            },
            {
                title: "Super Hitman",
                shortDesc: "A top-down survival shooting game",
                dates: {
                    start: "March 2015",
                    end: "June 2015"
                },
                technologies: [ "Python", "Pygame" ]
            }
        ]
    }

    getVolunteerExperience() {
        return [
            {
                title: "MasseyHacks III Organizer",
                position: "Head of Workshops",
                description: "Designed workshops to teach new technologies to 200 high school hackers"
            }
        ]
    }

    getWorkExperience() {
        return [
            {
                title: "Stone Masonry Labourer",
                dates: {
                    start: "June 2017",
                    end: "August 2017"
                },
                description: "Built the exteriors of multi-million dollar houses"
            }
        ];
    }

    getEducation() {
        return {
            university: [
                {
                    degree: "Candidate for Bachelor of Software Engineering",
                    school: "University of Waterloo",
                    dates: {
                        start: "September 2017",
                        end: "April 2022 (projected)"
                    }
                }
            ]
        };
    }

    contact(method) {
        switch (method) {
            case "EMAIL":
                return "mailto:Michal.G.Jez@gmail.com";
            case "GITHUB":
                return "https://github.com/MJez29";
            case "FACEBOOK":
                return "https://facebook.com/michal.jez.39";
        }
    }

}