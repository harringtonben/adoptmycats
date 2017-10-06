"use strict";

const catxhr = require("./xhr");
let howManyCats = 0;

$("#catz").keypress((event)=>{
    if (event.key === "Enter" && $("#catz").val() != "") {
        catxhr($("#catz").val());
        $("#catz").val("");
    }    
});

$("#gimmeCatz").click((event)=>{
    if ($("#catz").val() != "") {
        catxhr($("#catz").val());
        $("#catz").val("");  
    }
});

$("#takeCatz").click(() => {
    $(".disabled-kitty").remove();
});

module.exports = {};