const morseKey = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

var uniqueMorseRepresentations = function (words) {
  const uniqueMorseCodes = []; // Set would've been way better but not available in ES5
  words.forEach((word) => {
    uniqueMorseCodes.push(convertWordToMorse(word));
  });

  return uniqueMorseCodes.unique().length;
};

const convertWordToMorse = (word) => {
  const morseCodeArray = [];
  for (let i = 0; i < word.length; i++) {
    morseCodeArray.push(morseKey[word.charCodeAt(i)-97]);
  }
  
  return morseCodeArray.join('');
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);

// convertWordToMorse('gin');