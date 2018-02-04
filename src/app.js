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

let rects = [
  {
    x: 40, 
    y: 0, 
    width: 40, 
    height: 300
  },
  {
    x: 100, 
    y: 0, 
    width: 40, 
    height: 20
  },
  {
    x: 160, 
    y: 0, 
    width: 40, 
    height: 300
  },
  {
    x: 220, 
    y: 0, 
    width: 40, 
    height: 300
  },
]




const svg = d3.select('#root').append('svg').attr('height', 300)

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
  const val = e.data[2]
  rects[numb].height = val
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

