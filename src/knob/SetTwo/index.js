const draw = (rects, svg) => {
  svg.append('path')
    .attr('d', () => 'M ' + 100 +' '+ 200 + ' l ' + 200 + ' ' + 0 + ' l ' + -100 + ' ' + -160 + ' z')
    .style('stroke', 'blue');

}

export default function(numb, val, rects, height, svg){
  rects[numb - 1].y = val
  rects[numb - 1].height = height - val
  return draw(rects, svg)
}