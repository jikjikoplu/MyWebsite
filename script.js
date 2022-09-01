// VARIABLES
// Colors
var pythonBlue = "#0000e6",
    javaRed = "#cc0000",
    javascriptYellow = "#ffff00",
    htmlOrange = "#e65c00",
    cssPurple = "#660066";

// Section 1
var nameList = ["Python", "Java", "JavaScript", "HTML", "CSS",
                "Python", "Java", "JavaScript", "HTML", "CSS"],
    valueList = [5732, 1201, 2484, 411, 312, 5, 2, 6, 2, 2],
    myPos,myName, myValue, myColor, myPercent, myWidth, myType,
    widthMax = 400, valueMax, totalLoc = 0, totalProjects = 13,
    runLength = valueList.length, graphBar, graphBarText;

// Section 2
var projectNameList = ["Kingdom of War v1.2", "Kingdom of War - Multiplayer",
                       "LimeBot", "FarmBot", "MapGen 4", "Exorcist",
                       "The Random Trivia Game", "Pong", "Racing Game 2",
                       "Battlefield Simulator", "30 Second Racing Game",
                       "The Devil in Me", "My Website"],
    projectLocList = [1845, 2561, 85, 794, 469, 876, 325, 167, 197, 1268, 94,
                      694, 787],
    projectColorList = ["py", "py", "py", "py", "py", "j", "j", "hc", "js",
                        "js", "js", "js", "hc"],
    maxProjectLoc = Math.max(...projectLocList), myProject;

//Section Three
var version = "2.1.1";

// Section Four
var showLinks = false,
    altLinkIDList = ["alt-link-pong", "alt-link-rg2-1", "alt-link-rg2-2",
                     "alt-link-basim", "alt-link-3srg", "alt-link-tdim"];


// CODE
// Section 1: Graphs 1 & 2 Widths
for(var i = 0; i < runLength / 2; i++){
    totalLoc += valueList[i];
}
document.getElementById("total-loc").innerHTML =
    "Total: " + totalLoc;
document.getElementById("total-projects").innerHTML =
    "Total: " + totalProjects;
for(i = 0; i < runLength; i++){
    if(i == 0){
        valueMax = Math.max(...valueList);
        myType = " Lines of Code ";
    }else if(i == 5){
        valueMax = Math.max(...valueList);
        myType = " Projects ";
    }
    myPos = valueList.indexOf(Math.max(...valueList));
    myValue = valueList[myPos];
    myName = nameList[myPos];
    valueList.splice(myPos, 1);
    nameList.splice(myPos, 1);
    //alert(myPos + " / " + myValue + " / " + myName);
    switch(myName){
        case "Python":
            myColor = pythonBlue;
            break;
        case "Java":
            myColor = javaRed;
            break;
        case "JavaScript":
            myColor = javascriptYellow;
            break;
        case "HTML":
            myColor = htmlOrange;
            break;
        case "CSS":
            myColor = cssPurple;
            break;
    }
    myPercent = myValue / valueMax;
    myWidth = myPercent * widthMax;
    document.getElementsByClassName("graph-bar")[i].style.width =
        myWidth + "px";
    document.getElementsByClassName("graph-bar")[i].style.backgroundColor =
        myColor;
    document.getElementsByClassName("graph-bar-text")[i].innerHTML =
        myName + " - " + myValue + myType +
        "(" + Math.round(myPercent * 100) + "%)";
}

// Section 3: Website Version
document.getElementById("title-section-version").innerHTML = version;

// Section 2: Graph 3 Widths
for(i = 0; i < 10; i++){
    myPos = projectLocList.indexOf(Math.max(...projectLocList));
    myProject = projectNameList[myPos];
    myLoc = projectLocList[myPos];
    myColor = projectColorList[myPos];
    switch(myColor){
        case "py":
            myColor = pythonBlue;
            break;
        case "j":
            myColor = javaRed;
            break;
        case "js":
            myColor = javascriptYellow;
            break;
        case "hc":
            myColor = htmlOrange;
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

// Section 4: Toggle Links Button
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
