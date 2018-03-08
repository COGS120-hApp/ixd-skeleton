'use strict';

$(document).ready(() => {
    var tags = [] // initialize empty tags

    console.log("tags selected: ", tags);

    $(".tags").click((event) => {
        event.preventDefault();

        console.log(event.target.textContent);

        let tag = event.target.textContent;

        let index = tags.indexOf(event);

        if(index == -1){
            tags.push(tag);
        } else {
            tags.splice(index, 1);
        }
    })
});

function chooseFile() {
    $("#fileInput").click();
 }