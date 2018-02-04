import * as d3 from 'd3'
import WebMidi from 'webmidi'

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
    height: height
  },
  {
    x: bar + 12 + (bar / 4), 
    y: height, 
    width: (bar / 2), 
    height: height
  },
  {
    x: ((bar + 12) * 2) + (bar / 4), 
    y: height,  
    width: (bar / 2), 
    height: height
  },
  {
    x:  ((bar + 12) * 3) + (bar / 4),
    y: height, 
    width: (bar / 2), 
    height: height
  },
]




const svg = d3.select('#root').append('svg').attr('height', height).attr('width', width)

const draw = (rects) => {
  d3.selectAll("svg > *").remove();
  for(let rect of rects){
    svg.append('rect')
      .attr('x', rect.x)
      .attr('y', rect.y)
      .attr('width', rect.width)
      .attr('height', rect.height)
  }
}

const pad = (e) => console.log(e)
const knob = (e) => {
  const numb = e.data[1]
  const val = (e.data[2] * height) / 127

  console.log(height, val)

  rects[numb - 1].y = val
  return draw(rects)
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

