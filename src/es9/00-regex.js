const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-01-16');

console.log(matchers[1]);
console.table(matchers);