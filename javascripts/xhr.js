"use strict";

const catz = [];

const getCatz = (kitties) => {
    $.ajax(`https://random-dogs-api.herokuapp.com/cats/${kitties}`).done((data) => {
        console.log(data);
    }).fail((error) => {
        console.log(error);
    });
};

module.exports = getCatz;