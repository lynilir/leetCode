/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let combinedArray = [];
  while (nums1.length > 0 || nums2.length > 0) {   
    if (nums1.length === 0 || nums2.length === 0){
      combinedArray = combinedArray.concat(nums2).concat(nums1);
      break;
    } else if (nums1[0] >= nums2[0]) {
      combinedArray.push(nums2.shift());
    } else {
      combinedArray.push(nums1.shift());
    }
  }

  return(findMedian(combinedArray));
};


var findMedian = (function(arr) {
  if (arr.length%2 === 0) {
    const second = arr[(arr.length/2)];
    const first = arr[(arr.length / 2)-1];
    return (first + second)/2;
  } else {
    return arr[Math.floor(arr.length/2)];
  }
});

findMedianSortedArrays([1,2],[4]);


// console.log(findMedian([1,2,3,4]));