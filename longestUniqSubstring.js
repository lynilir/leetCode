var Set = require('es6-set');

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let seen = new Set([]);
  let currentMaxLength = 0;
  let i = 0;
  let j =0;

  while (i < s.length && j < s.length) {
      if (!seen.has(s[j])){
        seen.add(s[j]);
        j++;
        currentMaxLength = Math.max(currentMaxLength, j-i);
      } else {
        seen.delete(s[i]);
        i++;
      }
    }

  return currentMaxLength;
};

console.log(lengthOfLongestSubstring('pwwkew'));