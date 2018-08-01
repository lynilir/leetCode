const brackets = {
  '(': ')',
  '{': '}',
  '[': ']'
};

var isValid = function (s) {
  const seen = [];
  const string = s.split('');
  for (let bracket of string) { //originally used a forEach, but forEach cannot be stopped and will always pop everything in the stack
    if (brackets[bracket]){
      seen.push(brackets[bracket]);
    } else {
      if (seen.pop() !== bracket) {
        return false;
      }
    }
  }

  return seen.length === 0;
};

console.log(isValid('([)]'));

