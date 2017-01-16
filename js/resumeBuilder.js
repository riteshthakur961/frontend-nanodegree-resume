/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ritesh Thakur",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "9716529845",
        "email": "riteshkumar45@gmail.com",
        "github": "https://github.com/riteshthakur961",
        "twitter": "https://twitter.com/RITESH19111994",
        "location": "Delhi"
    },
    "welcomeMessage": "Hi! Welcome to My Professional Resume",
    "skills": ["Html5 ", "Css3 ", "JavaScript ", "C"],
    "biopic": "images/me.jpg",

    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedNameRole = formattedName + formattedRole;
        $("#header").prepend(formattedNameRole);

        var formattedpicture = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedpicture + formattedwelcomemsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedmobile + formattedemail + formattedgithub + formattedtwitter + formattedlocation);
    }
};


var work = {
    "jobs": [{
            "employer": "Infosys",
            "title": "Systems Engineer",
            "dates": "25th september, 2016 - till present",
            "location": "Mysore",
            "description": "Worked in the field of web development using Html5, Css3 and JavaScript."
        },
        {
            "employer": "hklampotu",
            "title": "Front-end Engineer",
            "dates": "December,2016 - till present",
            "location": "Delhi",
            "description": "Worked as a course Developer."
        }
    ],

    "display": function() {
        work.jobs.forEach(function(job) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedworklocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworklocation);
            $(".work-entry:last").append(formattedworkDescription);
        });
    }
};

var education = {
    "schools": [{
            "name": "Mount Olivet School",
            "location": "Delhi",
            "degree": "High School",
            "majors": ["non-medical science"],
            "dates": "April,1998 - March,2009",
            "url": "https://www.mountolivet.edu.in"
        },
        {
            "name": "G.B.S.S.S No.1 , Shakti Nagar",
            "location": "Delhi",
            "degree": "Sr. Secondary",
            "majors": ["non-medical science"],
            "dates": "April,2009 - March,2011",
            "url": "https://www.gbsss.edu.in"
        },
        {
            "name": "G. B. Pant Engg. College",
            "location": "Delhi",
            "degree": "B.Tech",
            "majors": ["ECE"],
            "dates": "August,2012 - July,2016",
            "url": "https://www.gbpec.edu.in"
        }
    ],

    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity India",
        "dates": "Sept.,2016 - Feb.,2017",
        "url": "https://www.udacity.com"
    }],

    "display": function() {

        education.schools.forEach(function(school) {

            $("#education").append(HTMLschoolStart);

            var formattedschoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
            var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);

            $(".education-entry:last").append(formattedschoolNameDegree);
            $(".education-entry:last").append(formattedschoolDates);
            $(".education-entry:last").append(formattedschoolLocation);

            if (school.majors.length > 0) {
                for (var major = 0; major < school.majors.length; major++) {
                    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors[major]);
                    $(".education-entry:last").append(formattedschoolMajor);
                }
            }
        });

        education.onlineCourses.forEach(function(oc) {

            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", oc.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", oc.school);
            var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
            var formattedonlineDates = HTMLonlineDates.replace("%data%", oc.dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", oc.url);

            $(".education-entry:last").append(formattedonlineTitleSchool);
            $(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineURL);
        });
    }
};

var projects = {
    "projects": [{
        "title": "Build Own Portfolio ",
        "dates": "Nov.,2016",
        "description": "In this project I developed my own portfolio which showcases the projects that I will be completing in this Nanodegree.",
        "images": ["images/portfolio.jpg", "images/portfolio.jpg"]
    }],

    "display": function() {
        projects.projects.forEach(function(pro) {

            $("#projects").append(HTMLprojectStart);

            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", pro.title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", pro.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", pro.description);

            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);

            if (pro.images.length > 0) {

                for (var image = 0; image < pro.images.length; image++) {
                    var formattedprojectImage = HTMLprojectImage.replace("%data%", pro.images[image]);
                    $(".project-entry:last").append(formattedprojectImage);
                }
            }
        });
    }
};

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toupperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);