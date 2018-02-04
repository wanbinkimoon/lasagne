import * as d3 from 'd3'
import WebMidi from 'webmidi'
import handlePads from './pad/index'
import handleKnobs from './knob/index'

// Selecting and appending elements
// d3.select('#root')
//   .append('h5')
//   .append('text')
//   .text(`D3 version: ${d3.version}`)

// Loading external data
// d3.csv('/data/sample.csv', (error, dataset) => {
//   dataset.forEach((data) => {
//     console.log(data)
//   })
// })

const height = window.innerHeight - 72
const width = window.innerWidth - 72
const bar = (width / 4) - 9

let rects = [
  {
    x: (bar / 4), 
    y: height, 
    width: (bar / 2), 
    height: height - 2
  },
  {
    x: bar + 12 + (bar / 4), 
    y: height, 
    width: (bar / 2), 
    height: height - 2
  },
  {
    x: ((bar + 12) * 2) + (bar / 4), 
    y: height,  
    width: (bar / 2), 
    height: height - 2
  },
  {
    x:  ((bar + 12) * 3) + (bar / 4),
    y: height, 
    width: (bar / 2), 
    height: height - 2
  },
]




const svg = d3.select('#root').append('svg').attr('height', height).attr('width', width)

const pad = (e) => {
  d3.selectAll("svg > *").remove();

  console.log(e.data[1])
  const numb = e.data[1]
  handlePads(numb, svg)
}

const knob = (e) => {
  d3.selectAll("svg > *").remove();
  
  const numb = e.data[1]
  const val = (e.data[2] * height) / 127

  handleKnobs(numb, val, rects, height, svg)
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

