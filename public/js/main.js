'use strict';

$(document).ready(() => {
	console.log("javascript loaded");

	$.get("/html/login", (res) => {
		console.log(res);

		$("router").html(res.payload);
	})

	// let splitPath = window.location.pathname.split('/');
	// let id = parseInt(splitPath[splitPath.length - 1]);
	// console.log(id);
	// if(id === 0){
	// 	$('button.rewind').prop('disabled', true);
	// }
})


$("button.uninterested").click(cycleForwardThroughEvents);
$("button.rewind").click(cycleBackwardThroughEvents);

function cycleForwardThroughEvents(event) {
	event.preventDefault();
	let splitPath = window.location.pathname.split('/');
	let id = parseInt(splitPath[splitPath.length - 1]) + 1;
	console.log(id);
	$(location).attr('href', '/eventSearch/' + id);
}

function cycleBackwardThroughEvents(event) {
	event.preventDefault();
	let splitPath = window.location.pathname.split('/');
	let id = parseInt(splitPath[splitPath.length - 1]) - 1;
	console.log(id);

	$(location).attr('href', '/eventSearch/' + id);
}

