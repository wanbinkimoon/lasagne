import SetOne from './SetOne/index';
import SetTwo from './SetTwo/index';
// import SetThree from './SetThree/index';
// import SteFour from './SteFour/index';
// import SetFive from './SetFive/index';
// import SetSix from './SetSix/index';
// import SetSevet from './SetSevet/index';
// import SetEight from './SetEight/index';

export default function(numb, val, set, svg) {
  const setSwitcher = set => {
    switch (set) {
      case 1:
        return SetOne(numb, val, svg);
        break;
      case 2:
        return SetTwo(numb, val, svg);
        break;
      case 3:
        return console.log(numb, val, set);
        break;
      case 4:
        return console.log(numb, val, set);
        break;
      case 5:
        return console.log(numb, val, set);
        break;
      case 6:
        return console.log(numb, val, set);
        break;
      case 7:
        return console.log(numb, val, set);
        break;
      case 8:
        return console.log(numb, val, set);
        break;
    }
  };

  return setSwitcher(set);
}
