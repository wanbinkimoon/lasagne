import * as d3 from 'd3';
import WebMidi from 'webmidi';
import initialState from './store';
import handlePads from './pad/index';
import handleKnobs from './knob/index';
import setup from './setup'
const store = {...initialState};

const svg = d3
  .select('#root')
  .append('svg')
  .attr('height', setup.height)
  .attr('width', setup.width);

const pad = e => {
  d3.selectAll('svg > *').remove();
  const numb = e.data[1];
  return (store.state = {
    ...handlePads(numb, store),
  });
};

const knob = e => {
  d3.selectAll('svg > *').remove();
  const numb = e.data[1];
  const val = e.data[2] / 127 * 100;
  const {set} = store.state;

  return handleKnobs(numb, val, set, svg);
};

WebMidi.enable(err => {
  try {
    var input = WebMidi.getInputByName('LPD8');
    input.addListener('noteon', 'all', pad);
    input.addListener('controlchange', 'all', knob);
  } catch (err) {
    console.log('WebMidi could not be enabled.', err);
  }
});
