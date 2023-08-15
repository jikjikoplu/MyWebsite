// CLASSES

// Language
class Language{
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.totalLoc = 0;
        this.totalProjects = 0;
    }
}

// Project
class Project{
    constructor(name, lang, loc, version){
        this.name = name;
        this.lang = lang;
        this.loc = loc;
        this.version = version;
        this.totalLoc;
        switch(typeof this.loc){
            case "number":
                this.totalLoc = this.loc;
                break;
            default:
                this.totalLoc = 0;
                for(let i = 0; i < this.loc.length; i++){
                    this.totalLoc += this.loc[i];
                }
                break;
        }
        this.color;
        try{
            if(this.lang.includes(css)){
                this.color = html.color;
            }else{
                this.color = javaScript.color;
            }
        }catch(e){
            this.color = this.lang.color;
        }
    }
}

// FUNCTIONS

function formatNum(num){
    return num.toLocaleString("en-US").replace(",", " ");
}

// Buttons

// Toggle Links Button
function toggleLinks(){
    showLinks = ! showLinks;
    if(showLinks){
        document.getElementById("button-left").style.backgroundColor = green;
        for(i = 0; i < document.querySelectorAll(".project-alt-link").length;
        i++){
            document.getElementsByClassName("project-alt-link")[i].innerHTML =
                "Website";
        }
    }else{
        document.getElementById("button-left").style.backgroundColor = grey4;
        for(i = 0; i < document.querySelectorAll(".project-alt-link").length;
        i++){
            document.getElementsByClassName("project-alt-link")[i].innerHTML =
                "";
        }
    }
}

// Toggle Versions
function toggleVersions(){
    showVersions = ! showVersions;
    if(showVersions){
        document.getElementById("button-right").style.backgroundColor = green;
        var i = 0;
        for(let ii = projectList.length - 1; ii >= 0; ii--){
            if(projectList[ii].version != ""){
                document.getElementsByClassName("project-version")[i++]
                    .innerHTML = projectList[ii].version;
            }
        }
    }else{
        document.getElementById("button-right").style.backgroundColor = grey4;
        var i = 0;
        for(let ii = projectList.length - 1; ii >= 0; ii--){
            if(projectList[ii].version != ""){
                document.getElementsByClassName("project-version")[i++]
                    .innerHTML = "";
            }
        }
    }
}

// VARIABLES

// Colors
var grey4 = "#606060";
var grey5 = "#808080";
var green = "#00b050";

// Languages
var python = new Language("Python", "#2525ff");
var java = new Language("Java", "#ff2525");
var cSharp = new Language("C#", "#25ff25", "cs");
var javaScript = new Language("JavaScript", "#ffff25");
var html = new Language("HTML", "#ff7c25");
var css = new Language("CSS", "#922592");
var langList = [python, java, cSharp, javaScript, html, css];

// Projects
kingdomOfWar = new Project("Kingdom of War", python, 1845, "v1.2");
kingdomOfWarMultiplayer =
    new Project("Kingdom of War - Multiplayer<wbr>", python, 2561, "v1.1");
limeBot = new Project("LimeBot", python, 932, "v2.6");
theDevilInMe =
    new Project("The Devil in Me", [javaScript, html], [694, 13], "");
farmBot = new Project("FarmBot", python, 794, "");
exorcist = new Project("Exorcist", java, 882, "");
mapGen4 = new Project("MapGen 4", python, 434, "");
theRandomTriviaGame = new Project("The Random Trivia Game", java, 325, "");
thirtySecondRacingGame =
    new Project("30 Second Racing Game", [javaScript, html], [94, 13], "");
battlefieldSimulator =
    new Project("Battlefield Simulator", [javaScript, html], [1268, 13], "");
racingGame2 = new Project("Racing Game 2", [javaScript, html], [201, 13], "");
pong = new Project("Pong", [javaScript, html, css], [107, 26, 34], "");
myWebsite = new Project("My Website", [javaScript, html, css],
    [241, 521, 317], "v2.13.1");
fakeOS = new Project("FakeOS", java, 1324, "v1.6");
mapGen5 = new Project("MapGen 5", python, 589, "");
worldGen = new Project("WorldGen", cSharp, 381, "v1.1");
var projectList = [kingdomOfWar, kingdomOfWarMultiplayer, limeBot,
    theDevilInMe, farmBot, exorcist, mapGen4, theRandomTriviaGame,
    thirtySecondRacingGame, battlefieldSimulator, racingGame2, pong,
    myWebsite, fakeOS, mapGen5, worldGen];

// Buttons
var showLinks = false;
var showVersions = false;

// MAIN CODE

// Setup
var totalLoc = 0;
for(let i = 0; i < langList.length; i++){
    for(let ii = 0; ii < projectList.length; ii++){
        if(projectList[ii].lang === langList[i]){
            langList[i].totalLoc += projectList[ii].loc;
            langList[i].totalProjects++;
        }else{
            try{
                if(projectList[ii].lang.includes(langList[i])){
                langList[i].totalLoc += projectList[ii].loc[
                    projectList[ii].lang.indexOf(langList[i])];
                    langList[i].totalProjects++;
                }
            }catch(e){}
        }
    }
    totalLoc += langList[i].totalLoc;
}

// Graph 1
// Graph Subtitle
document.getElementById("total-loc").innerHTML =
    "Total: " + formatNum(totalLoc);
// Sorting Language List
var langListLoc = langList.slice(0);
for(let i = 0; i < langListLoc.length - 1; i++){
    for(let ii = 0; ii < langListLoc.length - i - 1; ii++){
        if(langListLoc[ii + 1].totalLoc > langListLoc[ii].totalLoc){
            var temp = langListLoc[ii];
            langListLoc[ii] = langListLoc[ii + 1];
            langListLoc[ii + 1] = temp;
        }
    }
}
// Graph Bars
for(let i = 0; i < langListLoc.length; i++){
    document.getElementsByClassName("graph-bar-tall")[i].style.width =
        400 * (langListLoc[i].totalLoc / langListLoc[0].totalLoc) + "px";
    document.getElementsByClassName("graph-bar-tall")[i]
        .style.backgroundColor = langListLoc[i].color;
    document.getElementsByClassName("graph-bar-tall-text")[i].innerHTML =
        langListLoc[i].name + " - " + formatNum(langListLoc[i].totalLoc) +
        " LoC (" + Math.round(langListLoc[i].totalLoc / totalLoc * 100) +
        "%)";
}

// Graph 2
// Graph Subtitle
document.getElementById("total-projects").innerHTML =
    "Total: " + formatNum(projectList.length);
// Sorting Language List
var langListProjects = langList.slice(0);
for(let i = 0; i < langListProjects.length - 1; i++){
    for(let ii = 0; ii < langListProjects.length - i - 1; ii++){
        if(langListProjects[ii + 1].totalProjects >
        langListProjects[ii].totalProjects){
            var temp = langListProjects[ii];
            langListProjects[ii] = langListProjects[ii + 1];
            langListProjects[ii + 1] = temp;
        }
    }
}
// Graph Bars
for(let i = 0; i < langListProjects.length; i++){
    let ii = i + langListProjects.length;
    document.getElementsByClassName("graph-bar-tall")[ii].style.width =
        400 * (langListProjects[i].totalProjects /
        langListProjects[0].totalProjects) + "px";
    document.getElementsByClassName("graph-bar-tall")[ii]
        .style.backgroundColor = langListProjects[i].color;
    document.getElementsByClassName("graph-bar-tall-text")[ii].innerHTML =
        langListProjects[i].name + " - " +
        formatNum(langListProjects[i].totalProjects) + " Projects (" +
        Math.round(langListProjects[i].totalProjects /
        projectList.length * 100) + "%)";
}

// Graph 3
// Sorting Project List
var projectListLoc = projectList.slice(0);
for(let i = 0; i < projectListLoc.length - 1; i++){
    for(let ii = 0; ii < projectListLoc.length - i - 1; ii++){
        if(projectListLoc[ii + 1].totalLoc > projectListLoc[ii].totalLoc){
            var temp = projectListLoc[ii];
            projectListLoc[ii] = projectListLoc[ii + 1];
            projectListLoc[ii + 1] = temp;
        }
    }
}
for(let i = 0; i < projectListLoc.length; i++){
    document.getElementsByClassName("graph-bar-small")[i].style.width =
        400 * (projectListLoc[i].totalLoc / projectListLoc[0].totalLoc) +
        "px";
    document.getElementsByClassName("graph-bar-small")[i]
        .style.backgroundColor = projectListLoc[i].color;
    document.getElementsByClassName("graph-bar-small-text")[i].innerHTML =
        (i + 1) + ". " + projectListLoc[i].name + " - " +
        formatNum(projectListLoc[i].totalLoc);
}

// Graph 5
for(let i = 0; i < 3; i++){
    document.getElementsByClassName("graph-bar-wide")[i].style.height =
        (projectList.length * 40) * (myWebsite.loc[i] / (myWebsite.loc[0] +
        myWebsite.loc[1] + myWebsite.loc[2])) - 2 + "px";
    document.getElementsByClassName("graph-bar-wide")[i]
            .style.backgroundColor = myWebsite.lang[i].color;
    document.getElementsByClassName("graph-bar-wide-text")[i].innerHTML =
        myWebsite.lang[i].name + " - " + formatNum(myWebsite.loc[i]) +
        " Lines of Code (" + Math.round(myWebsite.loc[i] / (myWebsite.loc[0] +
        myWebsite.loc[1] + myWebsite.loc[2]) * 100) + ")%";
}

// Project Tags
for(let i = projectList.length - 1; i >= 0 ; i--){
    var langName;
    try{
        if(projectList[i].lang.includes(css)){
            langName = "JS, HTML, CSS";
        }else{
            langName = "JS & HTML";
        }
    }catch(e){
        langName = projectList[i].lang.name;
    }
    document.getElementsByClassName("project-tag")[(projectList.length - i -
        1) * 2].style.backgroundColor = projectList[i].color;
    document.getElementsByClassName("project-tag")
        [(projectList.length - i - 1) * 2 + 1].style.backgroundColor =
        "rgb(0, " + (projectList[i].totalLoc / projectListLoc[0].totalLoc *
        215 + 40) + ", 0)";
    document.getElementsByClassName("project-tag-text")
        [(projectList.length - i - 1) * 2].innerHTML = langName;
    document.getElementsByClassName("project-tag-text")[(projectList.length -
        i - 1) * 2 + 1].innerHTML = projectList[i].totalLoc + " LoC";
}

// Website Version
document.getElementById("title-section-version").innerHTML =
    myWebsite.version;

// Buttons
toggleLinks();
toggleVersions();
