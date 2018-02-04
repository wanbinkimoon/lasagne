import rects from './store'

const height = window.innerHeight - 72
const width = window.innerWidth - 72
const bar = (width / 4) - 9

const draw = (rects, svg) => {
  for(let rect of rects){
    svg.append('rect')
      .attr('x', rect.x)
      .attr('y', rect.y)
      .attr('width', rect.width)
      .attr('height', rect.height)
      .attr('style', `fill:${rect.color};`)
  }
}

export default function(numb, val, svg){
  const valNorm = (val / 100) * height
  const valNormcolNorm = Math.round(255 - ((val / 100) * 255))

  rects[numb - 1].y = valNorm
  rects[numb - 1].height = height - valNorm
  rects[numb - 1].color = `rgb(${valNormcolNorm}, ${valNormcolNorm}, ${valNormcolNorm})`
  return draw(rects, svg)
}