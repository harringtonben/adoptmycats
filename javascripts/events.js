"use strict";

$("#catz").keypress((event)=>{
    if (event.key === "Enter" && $("#catz").val() != "") {
        console.log($("#catz").val());
        $("#catz").val("");
    }    
});

$("#gimmeCatz").click((event)=>{
    if ($("#catz").val() != "") {
        console.log($("#catz").val());
        $("#catz").val("");  
    }
});

module.exports = {};