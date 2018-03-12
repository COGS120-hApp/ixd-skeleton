'use strict';

// var events = [];
var id = 0

$(document).ready(() => {
	console.log("javascript loaded");

	let splitPath = window.location.pathname.split('/');
    id = parseInt(splitPath[splitPath.length - 1]);
    console.log(id);
	// console.log(id);
	// if(id === 0){
	// 	$('button.rewind').prop('disabled', true);
    // }
    
    
    // $.get('/api/event', (res) => {
    //     events = res.events;

    //     displayEvent(id);
    // });
})


$("button.uninterested").click(goBack);
// $("button.rewind").click(cycleBackwardThroughEvents);

function displayEvent(id){
    console.log(id);
    var event = events[id % events.length];
    $("img.eventImage").attr("src", event.imageURL);
    $("h6.eventName").text(event.name);
    $("span.eventDistance").text("10 miles");
    $("p.eventDescription").text(event.description);
}

function goBack(event){
    event.preventDefault();
    $(location).attr('href', '/eventSearchResults');
}

// function cycleForwardThroughEvents(event) {
// 	event.preventDefault();
// 	let splitPath = window.location.pathname.split('/');
//     //let id = parseInt(splitPath[splitPath.length - 1]) + 1;
//     id += 1;
// 	console.log(id);
//     //$(location).attr('href', '/eventSearch/' + id);
//     //window.history.pushState('', '', '/eventSearch/' + id);
//     displayEvent(id);
//     if(id === 0){
// 		$('button.rewind').prop('disabled', true);
//     } else 
//         $('button.rewind').prop('disabled', false);
// }

// function cycleBackwardThroughEvents(event) {
// 	event.preventDefault();
//     let splitPath = window.location.pathname.split('/');
//     id -= 1;
// 	//let id = parseInt(splitPath[splitPath.length - 1]) - 1;
// 	//window.history.pushState('', '', '/eventSearch/' + id);
//     displayEvent(id);
//     if(id === 0){
// 		$('button.rewind').prop('disabled', true);
//     } else 
//         $('button.rewind').prop('disabled', false);
// }