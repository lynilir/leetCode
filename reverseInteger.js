/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = '';
  let intString = x.toString();
  if (x>=0) {
    for (let i = intString.length-1; i >= 0; i--){
      res += intString[i];
    }
  } else {
    for (let i = intString.length - 1; i > 0; i--) {
      res += intString[i];
    }
    res = '-' + res;
  }
  res = parseInt(res);
  if (-Math.pow(2, 31) > res || Math.pow(2, 31) - 1 < res) {
    return 0;
  } else {
    return res;
  }
};


console.log(reverse(1534236469));


console.log(1534236469 > Math.pow(2, 31));
