var toggleDisplayGetAll = document.getElementById("DisplayGetAll");
var customJSbtn = document.getElementById("GetWhateverJScustomBtn");
var updateRecordInputs = document.getElementById("RecordPUT");
// -----
var removeRedundantButton = document.getElementById("redundantElementsToggle");
var redundantElements = document.getElementsByClassName("redundant");
var totalRedundantElements = redundantElements.length;
// -----
var nonRedundantElements = document.getElementsByClassName("nonRedundant");
var totalNonRedundantElements = nonRedundantElements.length;
// -----
var removeWipButton = document.getElementById("wipElementsToggle");
var wipElements = document.getElementsByClassName("wip");
var totalWipElements = wipElements.length;

window.onload = function () {
    // anonymous function
    for (let i = 0; i < totalRedundantElements; i++) {
        redundantElements[i].style.display = "none";
    }
    document.getElementById('currentDateTime').innerHTML = Date();
}

function toggleRedundant() {
    var show = "Show redundant elements";
    var remove = "Remove redundant elements";
    function blockNone(attribute) {
        for (let i = 0; i < totalRedundantElements; i++) {
            redundantElements[i].style.display = attribute;
        }
    }
    
    var RedundantPresent = removeRedundantButton.innerHTML.match(/rem/gi);
    if (RedundantPresent == "Rem"){
        removeRedundantButton.innerHTML = show;
        blockNone("none");
    } else {
        removeRedundantButton.innerHTML = remove;
        blockNone("block");
    }

    var redundantNotPresent = removeRedundantButton.innerHTML.match(/show/gi);
    if (redundantNotPresent == "Show"){
        for (let i=0; i < totalNonRedundantElements; i++) {
            nonRedundantElements[i].style.display = "block";
        }
    } else {
        for (let i=0; i < totalNonRedundantElements; i++) {
            nonRedundantElements[i].style.display = "none";
        }
    }
}

function toggleWip() {
    // it's just copied for now
    var show = "Show not functioning elements";
    var remove = "Remove not functioning elements";
    function blockNone(attribute) {
        for (let i = 0; i < totalWipElements; i++) {
            wipElements[i].style.display = attribute;
        }
    }
    
    var wipPresent = removeWipButton.innerHTML.match(/rem/gi);
    if (wipPresent == "Rem"){
        removeWipButton.innerHTML = show;
        blockNone("none");
    } else {
        removeWipButton.innerHTML = remove;
        blockNone("block");
    }
}

function getOpinion() {
    var opinion = document.getElementById('dataList').value;
    var hideousButton = document.getElementById("hideous_btn");
    if (opinion == "nice!") {
        hideousButton.style.display = "none";
    } else  if (opinion == "okay.") {
        hideousButton.style.display = "none";
    } else {
        hideousButton.style.display = "block";
    }
}

function removeTextFromInput() {
    // try again later
}

function hideShow() {
    var onOff = document.getElementById("remove_it");
    var buttonName = document.getElementById("hideous_btn");
    if (onOff.style.display === "none") {
        onOff.style.display = "block";
        buttonName.innerHTML = "It is still hideous"
    } else {
        onOff.style.display = "none";
        buttonName.innerHTML = "Oh well, bring it back";
    }
    
}

function hideShowImg() {
    var onOff = document.getElementById("image");
    var buttonName = document.getElementById("buttonImage");
    if (onOff.style.display === "none") {
        onOff.style.display = "block";
        buttonName.innerHTML = "Hide this image"
    } else {
        onOff.style.display = "none";
        buttonName.innerHTML = "Show this image";
    }
    
}

function storeReport() {
    if (typeof(Storage) !== "undefined") {
        localStorage.reportHistory += document.getElementById
        ("reportHere").value + " ";
        document.getElementById("reportHere").value = "";
        
    } else {
        document.getElementById("readReport").innerHTML = "Error";
        return;
    }
    document.getElementById("readReport")
            .innerHTML = "" + localStorage.reportHistory + " ";
}

function deleteReport() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.reportHistory) {
            localStorage.reportHistory = "";
        }
    } else {
        document.getElementById("readReport").innerHTML = "Error";
        return;
    }
    document.getElementById("readReport")
    .innerHTML = localStorage.reportHistory;
}

// such editor would normally pose a serious security risk
function enableEditor() {
    var onOff = document.getElementById("space_for_editor");
    var text_editor_switch = document.getElementById("text_editor_txtarea");
    var display_results_btn_switch = document.getElementById("display_results_btn");
    var editor_output_switch = document.getElementById("editor_output");
    var enable_editor_btn = document.getElementById("enable_editor_btn");
    var apiDiv = document.getElementById("apiDiv");

    if (enable_editor_btn.innerHTML === "Show the editor") {
        enable_editor_btn.innerHTML = "Hide the editor";
    } else {
        enable_editor_btn.innerHTML = "Show the editor";
    }

    if (onOff.style.display === "none") {
        onOff.style.display = "block";
    } else {
        onOff.style.display = "none";
    }
    if (text_editor_switch.style.display === "none") {
        text_editor_switch.style.display = "block";
    } else {
        text_editor_switch.style.display = "none";
    }
    if (display_results_btn_switch.style.display === "none") {
        display_results_btn_switch.style.display = "block";
    } else {
        display_results_btn_switch.style.display = "none";
    }
    if (editor_output_switch.style.display === "none") {
        editor_output_switch.style.display = "block";
    } else {
        editor_output_switch.style.display = "none";
    } if (apiDiv.style.display == "none") {
        apiDiv.style.display = "block";
    } else {
        apiDiv.style.display = "none";
    }
}

function add_HTML_elements () {
    document.getElementById("editor_output")
            .innerHTML = document.getElementById("text_editor_txtarea").value;
}

$(document).ready(function(){
    $("#slide_it_button" ).click(function(){
        $("#slide_it_too").slideUp(2000);
        // $("#slide_it").slideUp(2200);
    });
});
$(document).ready(function(){
    $("html").mouseup(function(){
        // $("#slide_it").slideDown(2000); // bug on sliding down
        $("#slide_it_too").slideDown(2000);
    });
});

// --- API GET functions start ---
// CORS issue appears to have been solved
function getWhatever (method) {
    if (method == 'jQuery') {
        $.getJSON("https://localhost:44391/api/weatherforecast/GetWhateverItReturns",
        function(resource){
            console.log(resource); // this is just debug
            var someData = resource[4].id;
            console.log(someData);
                
            if (resource != null) {
                toggleDisplayGetAll.innerHTML = "";
                for (i=0; i<100; i++) {
                    if (resource[i] != null) { // this was used to fix an error
                        toggleDisplayGetAll.innerHTML
                        += "| Id: "
                        + resource[i].id + " | Location: " + resource[i].location
                        + " | Temperature in C: " + resource[i].temperatureC
                        + " | Chance of rain: " + resource[i].rainChance + "%"
                        + " | Summary: " + resource[i].summary + " |"
                        + "<br>"
                        + "<hr>";
                    }
                }
            }
        });
    } else if (method == 'JScustomPrint') {
        // pure JS requests
        var request = new XMLHttpRequest();
        var url = 'https://localhost:44391/api/weatherforecast/GetWhateverItReturns';

        request.open("GET", url);
        request.send();

        request.onload = (e) => {
        console.log(request.response);
        // toggleDisplayGetAll.innerHTML = request.response[1]; //only one char is returned

            // customJSbtn.style.display = "none"; // looks like needs to be async or something

            toggleDisplayGetAll.innerHTML = "";
            var ichar = 0;
            while (request.response[ichar] != null) {
                if (request.response[ichar] == '{'){
                    
                } else if (request.response[ichar] == '[') {

                } else if (request.response[ichar] == '"') {

                } else if (request.response[ichar] == '}') {
                    toggleDisplayGetAll.innerHTML += '<BR>' + '<hr>';
                    ichar++;
                } else if (request.response[ichar] == ',') {
                    toggleDisplayGetAll.innerHTML += ', ';
                }
                
                else {
                    toggleDisplayGetAll.innerHTML +=
                    request.response[ichar];
                }
                ichar++;
            }
        }
    } else if (method == 'fetch') {

        var resource;

        const url = 'https://localhost:44391/api/weatherforecast/GetWhateverItReturns';
        fetch (url)
        .then(resource => resource.json())
        .then(resource => {
            toggleDisplayGetAll.innerHTML = JSON.stringify(resource);
        }
            );

        // toggleDisplayGetAll.innerHTML = 
    }
}

function toggleResource () {
    var toggleButtonName = document.getElementById("toggleResourceBtn");
    if (toggleDisplayGetAll.style.display === "none"){
        toggleDisplayGetAll.style.display = "block";
        toggleButtonName.innerHTML = "Hide data";
    }
    else {
        toggleDisplayGetAll.style.display = "none";
        toggleButtonName.innerHTML = "Show data";
    }
}

function secondToggleResource() {
    toggleResource();
}

function getOneRecord() {
    var getOneid = document.getElementById("recordId").value;
    var initialParagraphValue = document.getElementById("readRecord").value;
    var modifyRecordBtn = document.getElementById("ModifyRecordBtn");
    console.log(getOneid) // this is just debug
        $.getJSON("https://localhost:44391/api/weatherforecast/"
        + getOneid, function(record){ // it appears the error messaging did not work
            // in else condition due to jQuery implementation
            if (record.id == getOneid) {

                modifyRecordBtn.style.display = "block";
                document.getElementById("readRecord").innerHTML
                = "Id: " + record.id + ", Date and time: " + record.dateAndTime
                + ", Location: " + record.location
                + ", Temperature in C: " + record.temperatureC
                + ", Chance of rain: " + record.rainChance + "%"
                + ", Summary: " + record.summary;

                document.getElementById("getOneId").value = record.id;
                document.getElementById("getOneLocation").value = record.location;
                document.getElementById("getOneTemperature").value = record.temperatureC;
                document.getElementById("getOneChance").value = record.rainChance;
                document.getElementById("getOneSummary").value = record.summary;
            }
    }).fail(function(response) {
        document.getElementById("readRecord").innerHTML = "Request failed." + response
    });
    if (document.getElementById("readRecord").innerHTML.value == initialParagraphValue) {
        document.getElementById("readRecord").innerHTML = "Requesting data...";
        modifyRecordBtn.style.display = "none";
        updateRecordInputs.style.display = "none";
    }        
    
}

// --- API GET functions end ---

function modifyRecord() {
    updateRecordInputs.style.display = "block";
}

// --- API PUT function start ---

function updateRecord() {
    var putRequest = new XMLHttpRequest();
    var putId = document.getElementById("getOneId").value;
    var putDateTime = document.getElementById("PostDateTime").value;
    var putLocation = document.getElementById("PostLocation").value;
    var putTemperature = document.getElementById("PostTemperature").value;
    var putRainChance = document.getElementById("PostRainChance").value;
    var putSummary = document.getElementById("PostSummary").value;
    var putSubmitter = document.getElementById("PostSubmitter").value;

    var jsonUpdateLoad = JSON.stringify(
        {

        }
    )
}

// --- API PUT function end ---

// --- API POST functions start ---

function sendRequest() {
    var postRequest = new XMLHttpRequest();
    var postDateTime = document.getElementById("PostDateTime").value;
    var postLocation = document.getElementById("PostLocation").value;
    var postTemperature = document.getElementById("PostTemperature").value;
    var postRainChance = document.getElementById("PostRainChance").value;
    var postSummary = document.getElementById("PostSummary").value;
    var postSubmitter = document.getElementById("PostSubmitter").value;

    var jsonLoad = JSON.stringify(
        {
            dateAndTime : postDateTime, // Date issue fixed
            location : "" + postLocation,
            temperatureC : "" + postTemperature,
            rainChance : "" + postRainChance,
            summary : "" + postSummary,
            submittedBy : "" + postSubmitter
        }
    );

    postRequest.open("POST", "https://localhost:44391/api/weatherforecast/");
    postRequest.setRequestHeader("Content-Type", "application/json");
    postRequest.send(jsonLoad);
}

// --- API POST functions end ---

/* this code currently block the form
var targetForm = document.getElementById("htmlForm");
targetForm.addEventListener('submit', stopRefresh);
function stopRefresh(event) {
    event.preventDefault();
}
*/

function showImageDiv() {
    document.getElementById("imageDiv").style.display = "block";
}

setTimeout(showImageDiv, 5000); // most of the tests failed after this change 