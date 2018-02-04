const height = window.innerHeight - 72
const width = window.innerWidth - 72
const bar = (width / 4) - 9

export default [
  {
    x: (bar / 4), 
    y: height, 
    width: (bar / 2), 
    height: height - 2, 
    color: 'rgb(0,0,0)'
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