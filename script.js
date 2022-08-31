// Variables
var nameList = ["python", "java", "javascript", "html", "css"],
    locList = [5732, 1201, 2458, 432, 302],
    projectsList = [5, 2, 6, 2, 2],
    colorsList = ["#0000e6", "#cc0000", "#ffff00", "#e65c00", "#660066"];
var widthMax = 400,
    locMax = Math.max(...locList),
    projectsMax = Math.max(...projectsList);
var locTotal = 0, projectsTotal = 13;
var myWidth, myLoc, myProjects, myPercent, myName, myColor;
var projectNameList = ["Kingdom of War v1.2", "Kingdom of War - Multiplayer",
                       "LimeBot", "FarmBot", "MapGen 4", "Exorcist",
                       "The Random Trivia Game", "Pong", "Racing Game 2",
                       "Battlefield Simulator", "30 Second Racing Game",
                       "The Devil in Me", "My Website"],
    projectLocList = [1845, 2561, 74, 783, 469, 876, 325, 167, 197, 1268, 94,
                      694, 832],
    projectColorList = ["py", "py", "py", "py", "py", "j", "j", "hc", "js", "js", "js", "js", "hc"];
var maxProjectLoc = Math.max(...projectLocList);
var myPos, myProject;
var showLinks = false;
var altLinkIDList = ["alt-link-pong", "alt-link-rg2-1", "alt-link-rg2-2",
                     "alt-link-basim", "alt-link-3srg", "alt-link-tdim"];

// Graph Bar Width Calculation
for(var i = 0; i < locList.length; i++){
    myName = nameList[i];
    myColor = colorsList[i];
    // LoC
    myLoc = locList[i];
    myPercent = myLoc / locMax;
    myWidth = myPercent * widthMax;
    document.getElementById("loc-bar-" + myName).style.width = myWidth + "px";
    document.getElementById("loc-bar-" + myName + "-text").innerHTML +=
        myLoc + " Lines of Code (" + Math.round(myPercent * 100) + "%)";
    locTotal += myLoc;
    document.getElementById("loc-bar-" + myName).style.backgroundColor =
        myColor;
    // Projects
    myProjects = projectsList[i];
    myPercent = myProjects / projectsMax;
    myWidth = myPercent * widthMax;
    document.getElementById("projects-bar-" + myName).style.width =
    myWidth + "px";
    document.getElementById("projects-bar-" + myName + "-text").innerHTML +=
        myProjects + " Projects (" + Math.round(myPercent * 100) + "%)";
    document.getElementById("projects-bar-" + myName).style.backgroundColor =
        myColor;
}
document.getElementById("total-loc").innerHTML = "Total: " + locTotal;
document.getElementById("total-projects").innerHTML =
    "Total: " + projectsTotal;

// Project Comparision Bar Widths
for(i = 0; i < 10; i++){
    myPos = projectLocList.indexOf(Math.max(...projectLocList));
    myProject = projectNameList[myPos];
    myLoc = projectLocList[myPos];
    myColor = projectColorList[myPos];
    switch(myColor){
        case "py":
            myColor = "#0000e6";
            break;
        case "j":
            myColor = "#cc0000";
            break;
        case "js":
            myColor = "#ffff00";
            break;
        case "hc":
            myColor = "#e65c00";
            break;
    }
    myWidth = (myLoc / maxProjectLoc) * widthMax;
    projectNameList.splice(myPos, 1);
    projectLocList.splice(myPos, 1);
    projectColorList.splice(myPos, 1);
    document.getElementsByClassName("graph-bar-text-small")[i].innerHTML =
        "" + (i+1) + ". " + myProject + " - " + myLoc;
    document.getElementsByClassName("graph-bar-small")[i].style.width =
        myWidth + "px";
    document.getElementsByClassName("graph-bar-small")[i].
        style.backgroundColor = myColor;
}

// Toggle Links Button
function toggleLinks(){
    if(! showLinks){
        showLinks = true;
        document.getElementById("button").innerHTML = "Hide Alternate Links";
        for(i = 0; i < altLinkIDList.length; i++){
            if(altLinkIDList[i] != "alt-link-rg2-2"){
                document.getElementById(altLinkIDList[i]).innerHTML =
                    "Website";
            }else{
                document.getElementById(altLinkIDList[i]).innerHTML =
                    "Alternate Website";
            }
        }
    }else{
        showLinks = false;
        document.getElementById("button").innerHTML = "Show Alternate Links";
        for(i = 0; i < altLinkIDList.length; i++){
            document.getElementById(altLinkIDList[i]).innerHTML = "";
        }
    }
}
