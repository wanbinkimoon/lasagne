export default function(g){
  const side = 300
  const points = {
    a :{
      x: (side/2) * -1, 
      y: (Math.sqrt(3) / 6 * side ),
    },
    b :{
      x: side,
      y: 0,
    },
    c :{
      x: (side/2) * -1, 
      y: (Math.sqrt(3) / 2 * side ) * -1,
    }
  }

  console.table(points)

  const triangle = g
    .append('path')
    .attr('d', () => 'M ' + points.a.x + ' ' + points.a.y + ' l ' + points.b.x + ' ' + points.b.y + ' l ' + points.c.x + ' ' + points.c.y + ' z')
    .style('stroke', 'blue')
    .style('fill', 'none');


  return triangle
}