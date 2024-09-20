var toggleDisplayGetAll = document.getElementById("DisplayGetAll");

var locationsDisplayParagraph = document.getElementById("locationsDisplay");
var locationsData = document.getElementById("locationsData");
var locationsDisplayParagraphII = document.getElementById("locationsDisplayII");

var customJSbtn = document.getElementById("GetWhateverJScustomBtn");
var updateWeatherRecordInputs = document.getElementById("RecordPUT");
// -----
var redundantElementsToggleButton = document.getElementById("redundantElementsToggle");
var redundantElements = document.getElementsByClassName("redundant");
var totalRedundantElements = redundantElements.length;
// -----
var nonRedundantElements = document.getElementsByClassName("nonRedundant");
var totalNonRedundantElements = nonRedundantElements.length;
// -----
var removeWipButton = document.getElementById("wipElementsToggle");
var wipElements = document.getElementsByClassName("wip");
var totalWipElements = wipElements.length;

//--- test

var threeDigits = document.getElementById("threeDigits");

window.onload = function () {
    // anonymous function
    for (let i = 0; i < totalRedundantElements; i++) {
        redundantElements[i].style.display = "none";
    }
    
}

function simpleAlertTrigger () {
    alert("A test alert");
}

function promptTrigger() {
    var promptInput = prompt("A test prompt");
    if (promptInput != null) {
        alert(promptInput);
    }
}

function dateTime () {
    const dateAndTime = new Date();
    var date = dateAndTime.toLocaleDateString();
    var time = dateAndTime.toLocaleTimeString();
    document.getElementById('currentDateTime')
    .innerHTML = "Date: " + date + " Time: " + time;
}

setInterval(dateTime, 1000);

function toggleRedundant() {
    var showRedundantElementsLabel = "Show redundant elements";
    var removeRedundantElementsLabel = "Remove redundant elements";
    function blockNone(attribute) {
        for (let i = 0; i < totalRedundantElements; i++) {
            redundantElements[i].style.display = attribute;
        }
    }
    
    var RedundantPresent = redundantElementsToggleButton.innerHTML.match(/rem/gi);
    if (RedundantPresent == "Rem"){
        redundantElementsToggleButton.innerHTML = showRedundantElementsLabel;
        blockNone("none");
    } else {
        redundantElementsToggleButton.innerHTML = removeRedundantElementsLabel;
        blockNone("block");
    }

    var redundantNotPresent = redundantElementsToggleButton.innerHTML.match(/show/gi);
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
    $("div.container").click(function(e){
        if (e.shiftKey) {
            $(this).children().slideUp(2000);
        }
    });
});

$(document).ready(function(){
    $(".container").mouseup(function(){
        // $("#slide_it").slideDown(2000); // bug on sliding down
        $(this).children().slideDown(2000);
    });
});

// --- API GET functions start ---
// CORS issue appears to have been solved
function getWhatever (method) {
    document.getElementById("weatherTable").style.display = "none";
    toggleDisplayGetAll.innerHTML = "";
    if (method == 'jQuery') {
        toggleDisplayGetAll.style.display = "block";

        $.getJSON("https://localhost:44391/api/weatherforecast/GetWhateverItReturns",
        function(resource){
            console.log(resource); // this is just debug
            var someData = resource[4].id;
            console.log(someData);
                
            if (resource != null) {
                toggleDisplayGetAll.innerHTML = "";
                for (i=0; i<resource.length; i++) {
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
        }).fail(function(jqXHR, textStatus, errorThrown) {
            toggleDisplayGetAll.innerHTML = "Request failed."
            toggleDisplayGetAll.style = "color:Red;"
        });
    } else if (method == 'JScustomPrint') {
        toggleDisplayGetAll.style.display = "block";

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
        request.onerror = (e) => {
            console.log("Request failed.");
            toggleDisplayGetAll.innerHTML = "XMLHttpRequest failed."
            toggleDisplayGetAll.style = "color:Red;"
        }
    } else if (method == 'fetch') {
        document.getElementById("weatherData").innerHTML = "";

        const url = 'https://localhost:44391/api/weatherforecast/GetWhateverItReturns';
        fetch (url)
        // .then(resource => resource.json()) // arrow function that does not require the return keyword
        
        /*.then(resource => { // arrow function with brackets that requires the return keyword
            return resource.json()
        })*/
        
        .then(resource => {
            if(!resource.ok) {
                throw new Error ('Failed to get a response.'); // this seems to be redundant
            }
            return resource.json()
        })
        .then(resource => {
            // toggleDisplayGetAll.innerHTML = JSON.stringify(resource);
            document.getElementById("weatherTable").style.display = "table";
            for (let i=0; i < Object.keys(resource).length; i++) {
                document.getElementById("weatherData").innerHTML
                    += "<tr>"
                    + "<td>" + resource[i].id + "</td>"
                    + "<td>" + resource[i].dateAndTime + "</td>"
                    + "<td>" + resource[i].location + "</td>"
                    + "<td>" + resource[i].temperatureC + "</td>"
                    + "<td>" + resource[i].rainChance + "</td>"
                    + "<td>" + resource[i].summary + "</td>"
                    + "</tr>";
            }
        }
            ).catch(error => {
                toggleDisplayGetAll.style.display = "block";
                toggleDisplayGetAll.innerHTML = "Request to fetch data failed."
                toggleDisplayGetAll.style = "color:Red;" // bug: other messages are till black yet affected by this color change
            });

        // toggleDisplayGetAll.innerHTML = 
    }

}

function getLocations(){
    const url = 'https://localhost:44391/api/another';
    fetch (url)
    .then (resource => {
        if(!resource.ok) {
            throw new Error ('Failed to get a response.');
        }
        return resource.json();
    })
    // .then(resource => resource.json())
    .then(resource => {
        
        /*var stringifiedResource = JSON.stringify(resource);
        locationsDisplayParagraph.innerHTML = stringifiedResource;*/

        console.log(Object.keys(resource).length);

        if (Object.keys(resource).length>0){
            locationsDisplayParagraphII.innerHTML = "";
            locationsData.innerHTML = "";
            document.getElementById("locationsTable").style.display = "table";
        }
        for (let i=0; i < Object.keys(resource).length; i++) {
            locationsDisplayParagraphII.innerHTML += [i+1] + ". Location: " +
            resource[i].location
            + ", " + "Location size: " + resource[i].location_Size
            + ", " + "Population: " + Number(resource[i].population).toLocaleString()
            + "<br>";

            locationsData.innerHTML
                += "<tr>"
                + "<td>" + resource[i].location + "</td>"
                + "<td>" + resource[i].location_Size + "</td>"
                + "<td>" + Number(resource[i].population).toLocaleString() + "</td>"
                + "</tr>";
        }
        var threeD = Number(resource[0].population).toLocaleString();
        threeDigits.value = threeD;
    }
        )
    .catch(error => {
        locationsDisplayParagraph.innerHTML = "Request to retrieve data failed.";
        locationsDisplayParagraph.style = "color:Red;"
    });
}

function threeDigitsFun() {
    var inter = threeDigits.value;
    // var loopInter = "";

    /*for( i=0; i < inter.length; i++) {
        if (inter[i] == '" "') {

        } else {
            loopInter += inter[i];
        }
    }*/

    //inter = inter.replace(/\s/g, ''); 
    inter = inter.replace(/[,\s]+|[,\s]+/g, '');
    var preThreeDigits = Number(inter);
    threeDigits.value = Number(preThreeDigits).toLocaleString();
}

var descending = true;

function sortTableNumerically(column, tableBodyId) {
    let rows, data1, data2, tableBody;

    tableBody = document.getElementById(tableBodyId);
    rows = tableBody.rows;

    for (i=0; i < (rows.length - 1); i++) {
        data1 = rows[i].getElementsByTagName("td")[column].innerHTML;
        data2 = rows[i+1].getElementsByTagName("td")[column].innerHTML;
        data1 = data1.replace(/[^$0-9.]/g, '');
        data2 = data2.replace(/[^$0-9.]/g, '');

        if (descending) {
            if (Number(data2) > Number(data1)) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                i=-1;
            }
        } else {
            if (Number(data2) < Number(data1)) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                i=-1;
            }
        }
        
        console.log(data1, data2);
    }
    if (descending) {
        descending = false;
    } else {
        descending = true;
    }
}

function sortTableAlphabetically(column, tableBodyId) {
    let rows, data1, data2, tableBody;

    tableBody = document.getElementById(tableBodyId);
    rows = tableBody.rows;

    for (i=0; i < (rows.length - 1); i++) {
        data1 = rows[i].getElementsByTagName("td")[column].innerHTML;
        data2 = rows[i+1].getElementsByTagName("td")[column].innerHTML;
        data1 = data1.toLowerCase();
        data2 = data2.toLowerCase();

        if (descending) {
            if (data2 > data1) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                i=-1;
            }
        } else {
            if (data2 < data1) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                i=-1;
            }
        }
        
        console.log(data1, data2);
    }
    if (descending) {
        descending = false;
    } else {
        descending = true;
    }
}

function toggleResource () {
    var toggleButtonName = document.getElementById("toggleResourceBtn");
    if (weatherDataDisplay.style.display === "none"){
        weatherDataDisplay.style.display = "block";
        toggleButtonName.innerHTML = "Hide data";
    }
    else {
        weatherDataDisplay.style.display = "none";
        toggleButtonName.innerHTML = "Show data";
    }
}

function secondToggleResource() {
    toggleResource();
}

var currentId;
function getOneRecord() {
    var getOneId = document.getElementById("recordId").value;
    var initialParagraphValue = document.getElementById("readRecord").value;
    var modifyRecordBtn = document.getElementById("ModifyRecordBtn");
    console.log(getOneId) // this is just debug
        $.getJSON("https://localhost:44391/api/weatherforecast/"
        + getOneId, function(record){ // it appears the error messaging did not work
            // in else condition due to jQuery implementation
            if (record.id == getOneId) {

                modifyRecordBtn.style.display = "block";
                document.getElementById("readRecord").innerHTML
                = "Id: " + record.id + "<br>" + "Date and time: " + record.dateAndTime
                + "<br>" + "Location: " + record.location
                + "<br>" + "Temperature in C: " + record.temperatureC
                + "<br>" + "Chance of rain: " + record.rainChance + "%"
                + "<br>" + "Summary: " + record.summary;

                document.getElementById("readRecord").style = "Color.black"
                document.getElementById("getOneId").value = record.id;
                currentId = record.id;
                document.getElementById("getOneDateAndTime").value = record.dateAndTime;
                document.getElementById("getOneLocation").value = record.location;
                document.getElementById("getOneTemperature").value = record.temperatureC;
                document.getElementById("getOneChance").value = record.rainChance;
                document.getElementById("getOneSummary").value = record.summary;
            }
    }).fail(function(jqXHR, textStatus, errorThrown) { // revisit detailed error printing later
        document.getElementById("readRecord").style = "Color:red"
        if (jqXHR.status = 404) {
            document.getElementById("readRecord").innerHTML = "Request failed. Record not found."
        }
        else
        document.getElementById("readRecord").innerHTML = "Request failed due to " + jqXHR.status
    });
    if (document.getElementById("readRecord").innerHTML == initialParagraphValue) {
        document.getElementById("readRecord").innerHTML = "Requesting data...";
        modifyRecordBtn.style.display = "none";
        updateWeatherRecordInputs.style.display = "none";
    }        
    
}

var currentLocation;
function getOneLocationRecord() {
    var getOneLocationName = document.getElementById("locationRecordName").value;
    var initialLocationParagraphValue = document.getElementById("readLocationRecord").value;
    var modifyLocationRecordBtn = document.getElementById("ModifyLocationRecordBtn");
    console.log(getOneLocationName) // this is just debug
        $.getJSON("https://localhost:44391/api/another/"
        + getOneLocationName, function(locationRecord){ // it appears the error messaging did not work
            // in else condition due to jQuery implementation
            if (locationRecord.location == getOneLocationName) {

                modifyLocationRecordBtn.style.display = "block";
                document.getElementById("readLocationRecord").innerHTML
                = "Location: " + locationRecord.location
                + "<br>" + "Location size: " + locationRecord.location_Size
                + "<br>" + "Population: " + locationRecord.population

                document.getElementById("getOneLocationName").value = locationRecord.location;
                currentLocation = locationRecord.location;
                document.getElementById("getOneLocationSize").value = locationRecord.location_Size;
                document.getElementById("getOneLocationPopulation").value = locationRecord.population;
            }
    }).fail(function(jqXHR, textStatus, errorThrown) { // revisit detailed error printing later
        document.getElementById("readLocationRecord").innerHTML = "Request failed." // + errorThrown
    });
    if (document.getElementById("readLocationRecord").innerHTML == initialLocationParagraphValue) {
        document.getElementById("readLocationRecord").innerHTML = "Requesting data...";
        modifyRecordBtn.style.display = "none";
        updateWeatherRecordInputs.style.display = "none";
    }        
    
}

// --- API GET functions end ---

function modifyRecord(param) {
    if (param == "oneWeatherRecord") {
        updateWeatherRecordInputs.style.display = "block";
    }
    else if (param == "oneLocationRecord") {
        document.getElementById("RecordLocationPUT").style.display = "block";
    }
}

// --- API PUT function start ---

function updateRecord() {
    var validationErrorsPresent = false;
    var namesValidationRegex = /^\s.|^\s+|.[\s][\s+].|.\s$/g;
    if (document.getElementById("getOneId").value != currentId){
        validationErrorsPresent = true;
    }
    
    if (document.getElementById("getOneDateAndTime").value == ""){
        validationErrorsPresent = true;
    }
    
    if (document.getElementById("getOneLocation").value.match(namesValidationRegex)){
        validationErrorsPresent = true;
    }
    else if (document.getElementById("getOneLocation").value == ""){
        validationErrorsPresent = true;
    }
    
    if (document.getElementById("getOneTemperature").value == ""){
        validationErrorsPresent = true;
    }
    
    if (document.getElementById("getOneChance").value == ""){
        validationErrorsPresent = true;
    } else if (document.getElementById("getOneChance").value > 90) {
        validationErrorsPresent = true;
    } else if (document.getElementById("getOneChance").value < 0) {
        validationErrorsPresent = true;
    }
    
    if (document.getElementById("getOneSummary").value.match(namesValidationRegex)){
        validationErrorsPresent = true;
    }
    else if (document.getElementById("getOneSummary").value == ""){
        validationErrorsPresent = true;
    }
    
    if (document.getElementById("PostOneSubmittedBy").value.match(namesValidationRegex)){
        validationErrorsPresent = true;
    }
    else if (document.getElementById("PostOneSubmittedBy").value == "") {
        validationErrorsPresent = true;
    }

    if (validationErrorsPresent) {
        document.getElementById("validationMessage").innerHTML
        = "One or more validation errors occurred.";
        return;
    } else {
        document.getElementById("validationMessage").innerHTML
        = "";
    }

    var putId = document.getElementById("getOneId").value;
    var putDateTime = document.getElementById("getOneDateAndTime").value;
    var putLocation = document.getElementById("getOneLocation").value;
    var putTemperature = document.getElementById("getOneTemperature").value;
    var putRainChance = document.getElementById("getOneChance").value;
    var putSummary = document.getElementById("getOneSummary").value;
    var putSubmitter = document.getElementById("PostOneSubmittedBy").value;

    var jsonUpdateLoad = JSON.stringify(
        {
            dateAndTime : putDateTime, // Date issue fixed
            location : "" + putLocation,
            temperatureC : "" + putTemperature,
            rainChance : "" + putRainChance,
            summary : "" + putSummary,
            submittedBy : "" + putSubmitter
        }
    );

    var putRequest = new XMLHttpRequest();
    putRequest.open("PUT", "https://localhost:44391/api/weatherforecast/" + putId);
    putRequest.setRequestHeader("Content-Type", "application/json");
    putRequest.send(jsonUpdateLoad);
}

function updateLocationRecord() { //wip
    var validationErrorsPresent = false;
    var namesValidationRegex = /^\s.|^\s+|.[\s][\s+].|.\s$/g;
    
    if (document.getElementById("getOneLocationName").value.match(namesValidationRegex)){
        validationErrorsPresent = true;
    }

    var putLocationName = document.getElementById("getOneLocationName").value;
    var putLocationSize = document.getElementById("getOneLocationSize").value;
    var putPopulation = document.getElementById("getOneLocationPopulation").value;
    var putLocationSubmitter = document.getElementById("postOneLocationSubmittedBy").value;

    var jsonUpdateLoad = JSON.stringify(
        {
            location : "" + putLocationName,
            location_Size : "" + putLocationSize,
            population : "" + putPopulation,
            submittedBy : "" + putLocationSubmitter
        }
    );

    var putRequest = new XMLHttpRequest();
    putRequest.open("PUT", "https://localhost:44391/api/another/" + putLocationName);
    putRequest.setRequestHeader("Content-Type", "application/json");
    putRequest.send(jsonUpdateLoad);
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

function demagnifyElements(){
    var magnificationButton = document.getElementById('magnificationButton');

    var magnificationState = document
    .getElementById('magnificationButton').innerHTML.match(/enable/gi);
    if (magnificationState == "Enable") {
        document.styleSheets[0]
        .insertRule
        ('*:hover:not(body, div, form, html, li, ul, p input, br + input) {transform: scale(2,3); background: white}');

        magnificationButton.innerHTML = 'Disable magnification';
    } else {
        document.styleSheets[0].deleteRule(0);

        magnificationButton.innerHTML = "Enable magnification";
    }
    
}

function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 200);
    });
  }
  