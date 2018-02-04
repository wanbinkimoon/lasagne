import SetOne from './SetOne/index'

const draw = (rects, svg) => {
  for(let rect of rects){
    svg.append('rect')
      .attr('x', rect.x)
      .attr('y', rect.y)
      .attr('width', rect.width)
      .attr('height', rect.height)
  }
}

export default function(numb, val, set, svg){
  // rects[numb - 1].y = val
  // rects[numb - 1].height = height - val
  // return draw(rects, svg)
  // console.log(numb, val, set, svg)

  const setSwitcher = (set) => {
    switch(set){
      case 1:
        return console.log(numb, val, set)
        break
      case 2:
        return console.log(numb, val, set)
        break
      case 3:
        return console.log(numb, val, set)
        break
      case 4:
        return console.log(numb, val, set)
        break
      case 5:
        return console.log(numb, val, set)
        break
      case 6:
        return console.log(numb, val, set)
        break
      case 7:
        return console.log(numb, val, set)
        break
      case 8:
        return console.log(numb, val, set)
        break
    }
  }

  return setSwitcher(set)
}
