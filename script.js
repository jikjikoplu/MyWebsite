// VARIABLES
// Colors
var pythonBlue = "#2525ff",
    javaRed = "#ff2525",
    javascriptYellow = "#ffff25",
    htmlOrange = "#ff7c25",
    cssPurple = "#922592",
    grey4 = "#606060",
    grey5 = "#808080",
    green = "#00b050";

// Section Four
var [myWebHTML, myWebCSS, myWebJS] = [541, 340, 242],
    myWebNameList = ["HTML", "CSS", "JavaScript"],
    myWebLocList = [myWebHTML, myWebCSS, myWebJS],
    myWebColorList = [htmlOrange, cssPurple, javascriptYellow],
    myWebTotalLoc = myWebHTML + myWebCSS + myWebJS;

// Section One
var nameList = ["Python", "Java", "JavaScript", "HTML", "CSS",
                "Python", "Java", "JavaScript", "HTML", "CSS"],
    valueList = [6519, 2488, 2364 + myWebJS, 78 + myWebHTML, 34 + myWebCSS,
                 5, 3, 6, 2, 2],
    myPos,myName, myValue, myColor, myPercent, myWidth, myType, myHeight,
    myLoc, widthMax = 400, totalValue, maxValue, totalLoc = 0, totalLoc2 = 0,
    runLength = valueList.length, myWidthPercent, totalLocString;

// Section Two and Three
var projectNameList = ["FakeOS", "My Website", "Pong", "Racing Game 2",
                       "Battlefield Sim", "30 Second Racing Game",
                       "The Random Trivia Game", "MapGen 4", "Exorcist",
                       "FarmBot", "The Devil in Me", "LimeBot",
                       "Kingdom of War - Multiplayer", "Kingdom of War"],
    projectLocList = [1281, myWebHTML + myWebCSS + myWebJS, 167, 214, 1281,
                      107, 325, 434, 882, 794, 707, 885, 2561, 1845],
    projectColorList = ["j", "hcj", "hcj", "js", "js", "js", "j", "py",
                        "j", "py", "js", "py", "py", "py"],
    maxProjectLoc = Math.max(...projectLocList), myProject, myBar, myBarText,
    bigPercent = 0, bigHeight = 0, c = 0,
    totalProjects = projectNameList.length;

// Section Five
var version = "v2.10.0";

// Section Six
var showLinks = false,
    altLinkIdList = ["alt-link-pong", "alt-link-rg2", "alt-link-basim",
                     "alt-link-3srg", "alt-link-tdim"];

// Section Seven
var showVersions = false,
    vTagList = ["v1.2", version, "v2.4", "v1.1", "v1.2"];


// CODE
for(var i = 0; i < runLength / 2; i++){
    totalLoc += valueList[i];
}
for(var i = 0; i < totalProjects; i++){
    totalLoc2 += projectLocList[i];
}

// Section 1: Graphs 1 & 2 Widths
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
    document.getElementsByClassName("graph-bar-tall")[i].style.width =
        myWidth + "px";
    document.getElementsByClassName("graph-bar-tall")[i]
        .style.backgroundColor = myColor;
    document.getElementsByClassName("graph-bar-tall-text")[i].innerHTML =
        myName + " - " + myValue + myType +
        "(" + Math.round(myPercent * 100) + "%)";
    if(myName == "HTML" && myValue < 100){
        document.getElementsByClassName("graph-bar-tall-text")[i].innerHTML +=
            "<br>(4 JS projects include HTML as well.)";
    }
}

// Section 2: Graph 4 Heights and Projects Tags
for(i = 0; i < totalProjects; i++){
    myProject = projectNameList[i];
    myLoc = projectLocList[i];
    myColor = projectColorList[i];
    switch(myColor){
        case "py":
            myColor = pythonBlue;
            myType = "Python";
            break;
        case "j":
            myColor = javaRed;
            myType = "Java";
            break;
        case "js":
            myColor = javascriptYellow;
            myType = "JavaScript";
            break;
        case "hcj":
            myColor = htmlOrange;
            myType = "HTML, CSS, JS";
            break;
    }
    myPercent = myLoc / totalLoc;
    myHeight = myPercent * 400;
    if(myHeight >= 15){
        myBar = document.getElementsByClassName("graph-bar-wide")[c];
        myBarText = document.getElementsByClassName("graph-bar-wide-text")[c];
        myBarText.innerHTML =
            myProject + " - " + (Math.round(myPercent * 1000) / 10) + "%";
        myBar.style.height = (myHeight - 2) + "px";
        myBar.style.backgroundColor = myColor;
        c++;
    }else{
        bigPercent += myPercent;
        bigHeight += myHeight;
    }
    document.getElementsByClassName("project-tag-text")[i * 2].innerHTML =
        myType;
    document.getElementsByClassName("project-tag-text")[i * 2 + 1].innerHTML =
        myLoc + " LoC";
    document.getElementsByClassName("project-tag")[i * 2]
        .style.backgroundColor = myColor;
    myColor = "rgb(0, " + (myLoc / maxProjectLoc * 225 + 30) + ", 0)";
    document.getElementsByClassName("project-tag")[i * 2 + 1]
        .style.backgroundColor = myColor;
}
myBar = document.getElementsByClassName("graph-bar-wide")[c];
myBarText = document.getElementsByClassName("graph-bar-wide-text")[c];
myBarText.innerHTML =
    "Other - " + (Math.round(bigPercent * 1000) / 10) + "%";
myBar.style.height = (bigHeight - 2) + "px";
myBar.style.backgroundColor = grey5;

// Section 3: Graph 3 Widths
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
        case "hcj":
            myColor = htmlOrange;
            break;
    }
    myWidth = (myLoc / maxProjectLoc) * widthMax;
    projectNameList.splice(myPos, 1);
    projectLocList.splice(myPos, 1);
    projectColorList.splice(myPos, 1);
    document.getElementsByClassName("graph-bar-small-text")[i].innerHTML =
        "" + (i+1) + ". " + myProject + " - " + myLoc;
    document.getElementsByClassName("graph-bar-small")[i].style.width =
        myWidth + "px";
    document.getElementsByClassName("graph-bar-small")[i]
        .style.backgroundColor = myColor;
}

// Section 4: Graph 5
for(i = 0; i < 3; i++){
    myName = myWebNameList[i];
    myLoc = myWebLocList[i];
    myColor = myWebColorList[i];
    myPercent = myLoc / myWebTotalLoc;
    myWidth = myPercent * 400 - 2;
    document.getElementsByClassName("graph-bar-wide-text")[i + 10].innerHTML =
        myName + " - " + myLoc +
        " Lines of Code (" + Math.round(myPercent * 100) + "%)";
    document.getElementsByClassName("graph-bar-wide")[i + 10].style.height =
        myWidth + "px";
    document.getElementsByClassName("graph-bar-wide")[i + 10]
        .style.backgroundColor = myColor;
}

// Section 5: Website Version
document.getElementById("title-section-version").innerHTML = version;

// Section 6: Toggle Links Button
function toggleLinks(){
    if(! showLinks){
        showLinks = true;
        document.getElementById("button-left").style.backgroundColor = green;
        for(i = 0; i < altLinkIdList.length; i++){
            if(altLinkIdList[i] == "alt-link-frmbot"){
                document.getElementById(altLinkIdList[i]).innerHTML =
                    "Add FarmBot to a Discord Server";
            }else{
                document.getElementById(altLinkIdList[i]).innerHTML =
                    "Website";
            }
        }
    }else{
        showLinks = false;
        document.getElementById("button-left").style.backgroundColor = grey4;
        for(i = 0; i < altLinkIdList.length; i++){
            document.getElementById(altLinkIdList[i]).innerHTML = "";
        }
    }
}

// Section 7: Toggle Versions Button
function toggleVersions(){
    if(! showVersions){
        showVersions = true;
        document.getElementById("button-right").style.backgroundColor = green;
        for(i = 0; i < vTagList.length; i++){
            document.getElementsByClassName("project-version")[i]
                .innerHTML = vTagList[i];
        }
    }else{
        showVersions = false;
        document.getElementById("button-right").style.backgroundColor = grey4;
        for(i = 0; i < vTagList.length; i++){
            document.getElementsByClassName("project-version")[i]
                .innerHTML = "";
        }
    }
}

// Error Warning
if(totalLoc != totalLoc2){
    alert(`Error: Total Lines of Code doesn't match.
Lines of Code in Graph 1: ` + totalLoc + `
Lines of Code in Graph 4: ` + totalLoc2 + `
If you know me (the creator of this website),
please contact me. Otherwise, go to either
Replit or Github (see very top of page)
if you have an account on either.`);
}
