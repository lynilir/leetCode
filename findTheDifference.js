/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const sArr = s.split('');
  const tArr = t.split('');
  for (var i = 0; i < tArr.length; i++) {
    if (!sArr.includes(tArr[i])) {
      return tArr[i];
    }
  }
};

const s = "abcd";
const t = "abcde";

console.log(findTheDifference(s, t));
