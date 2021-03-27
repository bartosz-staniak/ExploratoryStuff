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

function enableEditor() {
    var onOff = document.getElementById("slide_it_too");
    var buttonName = document.getElementById("hideous_btn");
    if (onOff.style.display === "none") {
        onOff.style.display = "block";
    } else {
        onOff.style.display = "none";
    }
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