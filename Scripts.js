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

// CORS issue appears to have been solved
$.getJSON("https://localhost:44391/api/weatherforecast/GetWhateverItReturns",
    function(resource){
        console.log(resource); // this is just debug
        var someData = resource[4].id;
        console.log(someData);
        for (i=0; i<100; i++){
            if (resource[i] != null) {
                document.getElementById("debug").innerHTML
                += "| Id: "
                + resource[i].id + " | City: " + resource[i].location
                + " | Temperature in C: " + resource[i].temperatureC
                + " | Chance of rain: " + resource[i].rainChance + "%"
                + " | Summary: " + resource[i].summary + " |"
                + "<br>";
            }
        }
});

function hideDebug () {
    var toggleDebug = document.getElementById("debug");
    var toggleButtonName = document.getElementById("hideDebug");
    if (toggleDebug.style.display === "block"){
        toggleDebug.style.display = "none";
        toggleButtonName.innerHTML = "Show debug";
    }
    else {
        toggleDebug.style.display = "block";
        toggleButtonName.innerHTML = "Hide debug";
    }
}

function getOneRecord() {
    var getOneid = document.getElementById("recordId").value;
    console.log(getOneid) // this is just debug
        $.getJSON("https://localhost:44391/api/weatherforecast/"
        + getOneid, function(record){
            if (record.id == getOneid) {
                document.getElementById("readRecord").innerHTML
                = "There is no such record.";
                document.getElementById("readRecord").innerHTML
                = "Id: " + record.id
                + ", City: " + record.location
                + ", Temperature in C: " + record.temperatureC +"%"
                + ", Chance of rain: " + record.rainChance
                + ", Summary: " + record.summary;
            } else {
                document.getElementById("readRecord").innerHTML
                = "There is no such record.";
            }
    });
}