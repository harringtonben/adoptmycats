"use strict";

let catz = [];

const getCatz = (kitties) => {
    $.ajax(`https://random-dogs-api.herokuapp.com/cats/${kitties}`).done((data) => {
        catz = data.cats;
        domString();
    }).fail((error) => {
        console.log(error);
    });
};

const domString = () => {
    let printString = ``;
    catz.forEach((cat)=> {
        printString += `<div class="cat-card col-md-6">
                            <div class="image-container">
                            <img src="${cat.imageUrl}">
                            </div>
                            <div class="description-container">
                            <h3>${cat.name}</h3>
                            <p> Color: ${cat.color}</p>
                            <p> Skills: ${cat.specialSkill} </p>
                            <p class="disabled-cat"> Toes: ${cat.numberOfToes} </p>
                            </div>
                        </div>`;
    });
    printDom(printString);
};

const printDom = (strang) => {
    $("#catContainer").html(strang);
};

module.exports = getCatz;