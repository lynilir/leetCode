const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  const numInStr = x.toString();
  for (let i = 0; i < numInStr.length; i++) {
    if (numInStr[i] != numInStr[numInStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(0));
