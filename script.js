// VARIABLES
// Colors
var pythonBlue = "#0000e6",
    javaRed = "#cc0000",
    javascriptYellow = "#ffff00",
    htmlOrange = "#e65c00",
    cssPurple = "#660066";

// Section One
var nameList = ["Python", "Java", "JavaScript", "HTML", "CSS",
                "Python", "Java", "JavaScript", "HTML", "CSS"],
    valueList = [5754, 2398, 2520, 529, 353, 5, 3, 6, 2, 2],
    myPos,myName, myValue, myColor, myPercent, myWidth, myType, myHeight,
    widthMax = 400, totalValue, maxValue, totalLoc = 0, totalProjects,
    runLength = valueList.length, graphBar, graphBarText, myWidthPercent;

// Section Two and Three
var projectNameList = ["FakeOS", "My Website", "Pong", "Racing Game 2",
                       "Battlefield Sim", "30 Second Racing Game",
                       "The Random Trivia Game", "MapGen 4", "Exorcist",
                       "FarmBot", "The Devil in Me", "LimeBot",
                       "Kingdom of War - Multiplayer", "Kingdom of War"],
    projectLocList = [1197, 982, 167, 197, 1268, 94, 325, 469, 876, 794,
                      694, 85, 2561, 1845],
    projectColorList = ["j", "hc", "js", "js", "js", "js", "j", "py",
                        "j", "py", "js", "py", "py", "py"],
    maxProjectLoc = Math.max(...projectLocList), myProject, myBar;

//Section Four
var version = "2.3.1";

// Section Five
var showLinks = false,
    altLinkIDList = ["alt-link-pong", "alt-link-rg2-1", "alt-link-rg2-2",
                     "alt-link-basim", "alt-link-3srg", "alt-link-tdim"];


// CODE
totalProjects = projectNameList.length;

// Section 1: Graphs 1 & 2 Widths
for(var i = 0; i < runLength / 2; i++){
    totalLoc += valueList[i];
}
totalLoc = totalLoc.toString();
totalLocString = totalLoc.charAt(0) + totalLoc.charAt(1) + " " +
           totalLoc.charAt(2) + totalLoc.charAt(3) + totalLoc.charAt(4);
document.getElementById("total-loc").innerHTML =
    "Total: " + totalLocString;
document.getElementById("total-projects").innerHTML =
    "Total: " + totalProjects;
for(i = 0; i < runLength; i++){
    if(i == 0){
        totalValue = totalLoc;
        maxValue = Math.max(...valueList);
        myType = " Lines of Code ";
    }else if(i == 5){
        totalValue = totalProjects;
        maxValue = Math.max(...valueList);
        myType = " Projects ";
    }
    myPos = valueList.indexOf(Math.max(...valueList));
    myValue = valueList[myPos];
    myName = nameList[myPos];
    valueList.splice(myPos, 1);
    nameList.splice(myPos, 1);
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
    myPercent = myValue / totalValue;
    myWidthPercent = myValue / maxValue;
    myWidth = myWidthPercent * widthMax;
    document.getElementsByClassName("graph-bar")[i].style.width =
        myWidth + "px";
    document.getElementsByClassName("graph-bar")[i].style.backgroundColor =
        myColor;
    document.getElementsByClassName("graph-bar-text")[i].innerHTML =
        myName + " - " + myValue + myType +
        "(" + Math.round(myPercent * 100) + "%)";
}

// Section 2: Graph 4 Widths
// Wrong order because project stat lists are deleted in Section 3
for(i = 0; i < projectNameList.length; i++){
    myProject = projectNameList[i];
    myLoc = projectLocList[i];
    myColor = projectColorList[i];
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
    myPercent = myLoc / totalLoc;
    myHeight = myPercent * 3000;
    myBar = document.getElementsByClassName("graph-bar-wide")[i];
    myBarText = document.getElementsByClassName("graph-bar-wide-text")[i];
    myBarText.innerHTML =
        myProject + " - " + (Math.round(myPercent * 1000) / 10) + "%";
    myBar.style.height = (myHeight - 6) + "px";
    myBar.style.backgroundColor = myColor;
    document.getElementsByClassName("second-tag")[i].innerHTML =
        myLoc + " LoC";
}

// Section 3: Graph 3 Widths and Projects Tags
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

// Section 4: Website Version
document.getElementById("title-section-version").innerHTML = version;

// Section 5: Toggle Links Button
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
