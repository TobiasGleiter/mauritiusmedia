export const selectColorFromLocation = (location: string) => {
  let color = '';

  switch (location) {
    case 'kirche':
      color = 'yellow';
      break;
    case 'gemeindehaus':
      color = 'blue';
      break;
    case 'allgemein':
      color = 'red';
      break;
    default:
      color = '';
      break;
  }

  return color;
};
