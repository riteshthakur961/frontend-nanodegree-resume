/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ritesh Thakur",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "9716529845",
        "email": "riteshkumar45@gmail.com",
        "twitter": "https://twitter.com/RITESH19111994",
        "github": "https://github.com/riteshthakur961",
        "blog": "myBlog@bloggers.com",
        "location": "Delhi"
    },
    "bioPic": "images/me.jpg",
    "welcomeMsg": "Hi! Welcome to My Professional Resume",
    "skills": ["Html5 ", "Css3 ", "JavaScript ", "C"]
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
    ]
};

var education = {
    "schools": [{
                "name": "Mount Olivet School",
                "degree": "High School",
                "dates": "April,1998 - March,2009",
                "location": "Delhi",
                "majors": ["non-medical science"]
            },
            {
                "name": "G.B.S.S.S No.1 , Shakti Nagar",
                "degree": "Sr. Secondary",
                "dates": "April,2009 - March,2011",
                "location": "Delhi",
                "majors": ["non-medical science"]
            },
            {
                "name": "G. B. Pant Engg. College",
                "degree": "B.Tech",
                "dates": "August,2012 - July,2016",
                "location": "Delhi",
                "majors": ["ECE"]
            }],

    "onlineCourses": [{
        "onlineTitle": "Front-End Web Developer",
        "onlineSchool": "Udacity India",
        "onlineDates": "Sept.,2016 - Feb.,2017",
        "onlineUrl": "https://www.udacity.com"
    }]
};

var projects = {
    "project": [{
        "projectTitle": "Build Own Portfolio ",
        "projectDates": "Nov.,2016",
        "projectDescription": "In this project I developed my own portfolio which showcases the projects that I will be completing in this Nanodegree.",
        "projectImage": ["images/portfolio.jpg", "images/portfolio.jpg"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);

    var formattedpicture = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedpicture + formattedwelcomemsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills:last").append(formattedSkill);
        }
    }
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedlocation + formattedblog);
};

work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
};

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toupperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

projects.display = function() {
    projects.project.forEach(function(pro) {

        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", pro.projectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", pro.projectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", pro.projectDescription);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);

        if (pro.projectImage.length > 0) {

            for (var image = 0; image < pro.projectImage.length; image++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", pro.projectImage[image]);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    });
};

education.display = function() {

    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
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
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", oc.onlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", oc.onlineSchool);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        var formattedonlineDates = HTMLonlineDates.replace("%data%", oc.onlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", oc.onlineUrl);

        $(".education-entry:last").append(formattedonlineTitleSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    });
};

bio.display();
work.display();
projects.display();
education.display();

function footercontacts() {
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#footerContacts").append(formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedblog);
}

footercontacts();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);