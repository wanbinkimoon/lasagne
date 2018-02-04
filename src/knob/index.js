const draw = (rects, svg) => {
  for(let rect of rects){
    svg.append('rect')
      .attr('x', rect.x)
      .attr('y', rect.y)
      .attr('width', rect.width)
      .attr('height', rect.height)
  }
}

export default function(numb, val, rects, height, svg){
  rects[numb - 1].y = val
  rects[numb - 1].height = height - val
  return draw(rects, svg)
}