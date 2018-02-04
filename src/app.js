import * as d3 from 'd3'
import WebMidi from 'webmidi'
import initialState from './store'
import handlePads from './pad/index'
import handleKnobs from './knob/index'

const height = window.innerHeight - 72
const width = window.innerWidth - 72
const bar = (width / 4) - 9

const store = {...initialState}

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
  const numb = e.data[1]
  return store.state = {
    ...handlePads(numb, store)
  }
}


const knob = (e) => {
  d3.selectAll("svg > *").remove();
  const numb = e.data[1]
  const val = e.data[2]
  const { set } = store.state

  return handleKnobs(numb, val, set, svg)
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

