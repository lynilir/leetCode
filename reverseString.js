const reverseString = (s) => {
  let reversed = '';
  for (var i = 0; i < s.length; i++) {
    reversed += (s[s.length - 1 - i]);
  }
  return reversed;
};
