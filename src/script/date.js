const formatYmd = (date) => date.toISOString().slice(0, 10);
const futureDate = (day) => new Date(new Date().getTime() + day * 86400000);

function formatIndo(date) {
  return date.toLocaleString('id', {
    dateStyle: 'long',
    timeStyle: 'long',
  });
}

export { formatYmd, formatIndo, futureDate };
