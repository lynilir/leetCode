/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxPalin = '';
  for (let i = 0; i <s.length; i++) {
    for (let j = 0; j < 2; j++) { // adding 0 and 1 checks for both even and odd palin's, ex 'aba' and 'abba'
      let left = i;
      let right = left + j;

      while (s[left] && s[left] === s[right]){
        left--;
        right++;
      }

      if (right - left -1 > maxPalin.length) {
        maxPalin = s.substring(left + 1, right);
      }
    }
  }

  return maxPalin;
};

console.log(longestPalindrome('abba'));