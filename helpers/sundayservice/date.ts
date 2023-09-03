export const convertDate = (tempDate: string) => {
  const date = new Date(tempDate);
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');

  return `${day}. ${month} ${year}, ${hour} Uhr`;
};

/* 
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const millisecond = String(date.getMilliseconds()).padStart(3, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
  */
