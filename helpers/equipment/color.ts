export const selectColorFromCategory = (category: string) => {
  let color = 'red';

  switch (category) {
    case 'Kirche':
      color = 'yellow';
      break;
    case 'gemeindehaus':
      color = 'yellow';
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
