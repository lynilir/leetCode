/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const seen = new Set([]);
  for(let num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
    } else {
      seen.delete(num);
    }
  // console.log(se);
  
  }

  const single = seen.values().next().value;
  console.log(single);
  return single;
};

singleNumber([4, 1, 2, 1, 2]);