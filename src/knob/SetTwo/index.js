import setup from '../../setup';
import triangle from './drawTriangle';

const draw = g => {
  g
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 10)
    .style('fill', 'tomato');

  triangle(g);
};

export default function(numb, val, svg) {
  const g = svg
    .append('g')
    .attr('transform', `translate(${setup.width / 2},${setup.height / 2})`);

  return draw(g);
}
