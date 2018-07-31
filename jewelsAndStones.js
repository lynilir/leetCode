var numJewelsInStones = function (J, S) {
  let numOfJewels = 0;
  S.split('').forEach((el) => {
    if (J.split('').includes(el)) {
      numOfJewels = numOfJewels + 1;
    }
  });
  
  return numOfJewels;
};

numJewelsInStones("aA", "aAAbbbb");