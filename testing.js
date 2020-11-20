const currentDate = new Date();
const formatter = new Intl.DateTimeFormat('en-us');
const formattedDate = formatter.format(currentDate);
console.log(formattedDate) // Displays the current date as MM-DD-YYYY

const currentTime = new Date();
setTimeout(() => {
  const newTime = new Date();
  const relativeFormatter = new Intl.RelativeTimeFormat('en-us');
  console.log(relativeFormatter.format((currentTime - newTime) / 1000, 'second'));
}, 2000)

const amount = 213267;

const Euros = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
const Yen = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' });
const Dollars = new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'});
console.log(Euros.format(amount))
console.log(Yen.format(amount))
console.log(Dollars.format(amount))