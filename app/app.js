const p5 = require('p5')
const WebMidi = require('webmidi')

var y = function() {if (e.data[1] == 1) { return e.data[2] }};
var x = function() {if (e.data[1] == 2) { return e.data[2] }};


function drawRect() {
	rect(y, x, 50 ,50)
}

function pad(e) {
	console.log(e);
	switch (e.data[1]) {
		case 40:
			drawRect();
		break;
	}
}

function knob(e) {
	console.log(e.data[1] + ': ' + e.data[2]);
	switch (e.data[1]) {
		case 1:
			background(200);
			fill(10);
			rect(50, e.data[2] / windowWidth * 100 , 50, 50);
			break
		case 2:
			background(200);
			fill(10);
			rect(e.data[2] * 2, e.data[2], 50, 50);
			break
	}

}

WebMidi.enable(function(err) {
	if (err) {
		console.log("WebMidi could not be enabled.", err);
	} else {
		var input = WebMidi.getInputByName("LPD8");

		input.addListener('noteon', 'all', pad);
		input.addListener('controlchange', 'all', knob);
	}
});

// P5
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
}

function draw() {

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}