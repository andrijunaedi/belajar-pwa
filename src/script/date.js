const formatYmd = (date) => date.toISOString().slice(0, 10);
const operatorDate = (day, operation) => {
  if (operation === '+') {
    return new Date(new Date().getTime() + day * 86400000);
  }
  if (operation === '-') {
    return new Date(new Date().getTime() - day * 86400000);
  }
};

function formatIndo(date) {
  return date.toLocaleString('id', {
    dateStyle: 'long',
    timeStyle: 'long',
  });
}

function dateIndo(date) {
  const short = date.toLocaleString('id', {
    dateStyle: 'short',
  });
  const long = date.toLocaleString('id', {
    dateStyle: 'long',
  });
  return { short, long };
}

function timeIndo(date) {
  const short = date.toLocaleString('id', {
    timeStyle: 'short',
  });
  const long = date.toLocaleString('id', {
    timeStyle: 'long',
  });
  return { short, long };
}

export { formatYmd, formatIndo, operatorDate, timeIndo, dateIndo };
