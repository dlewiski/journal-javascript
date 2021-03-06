export function journal(description) {
  var inputs = description.split(" ");
  var output = parseInt(inputs.length);
  return output;
}

export function vowelCount(description) {
  var inputs = description.match(/[aeiou]/g);
  var numOfVowels = parseInt(inputs.length);
  return numOfVowels;
}

export function consonantCount(description) {
  var inputs = description.match(/[bcdfghjklmnpqrstvwxyz]/g);
  var numOfCons = parseInt(inputs.length);
  return numOfCons
}

export function getTeaser(description) {
  // grab everything till the end of the sentence
  var arr = description.match(/(.*?)./g);
  var firstEightWords = arr[0].split(/\s+/).slice(0,8).join(" ");

  return firstEightWords;
}

// If the sentence is over 8 words, only display those first 8 words. Be sure to call this method from your front-end file to display the results as well, whenever a new journal entry is created.
