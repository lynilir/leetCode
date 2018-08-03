const a = 'i have a  cat.';

const countWords = (str) => {
  return str.split(' ').filter(el => Boolean(el)).length;
};

console.log(countWords(a));