const dateNow = new Date();

const formatYmd = (date) => date.toISOString().slice(0, 10);
const futureDate = (day) => new Date(new Date().getTime() + day * 86400000);

const formatIndo = (date) =>
  date.toLocaleString('id', {
    dateStyle: 'long',
    timeStyle: 'long',
  });

const dateAgo = futureDate(5);
console.log(dateNow);
console.log(formatYmd(dateNow));
console.log(dateAgo);
console.log(formatIndo(dateAgo));
