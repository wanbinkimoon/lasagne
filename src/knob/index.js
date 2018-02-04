import SetOne from './SetOne/index'

export default function(numb, val, set, svg){
  const setSwitcher = (set) => {
    switch(set){
      case 1:
        return SetOne(numb, val, svg)
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
