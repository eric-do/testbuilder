// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long
// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

var detectNetwork = function(cardNumber) {
  let prefix = cardNumber.slice(0,2);
  return getNetwork(cardNumber);
};

var validateCard = function(cardNumber) {
  // This function takes a string and returns true/false
    // True if card is valid
    // False if card in invalid
  // Invalid errors
    // Invalid characters in string
    // TODO


}

var getNetwork = function(cardNumber) {
  let network = '';
  let length = cardNumber.length;
  let dcRegex = /(38|39)/;
  let amexRegex = /(34|37)/;
  let visaRegex = /(4)/;
  let mcRegex = /(51|52|53|54|55)/;
  let discRegex = /(6011|65|64[4-9])/;
  let maestroRegex = /(5018|5020|5038|6304)/;

  if (cardNumber.search(dcRegex) === 0 && length === 14) {
     network = 'Diner\'s Club';
  }  else if (cardNumber.search(amexRegex) === 0 && length === 15) {
  	 network = 'American Express';
  }  else if (cardNumber.search(visaRegex) === 0 && (length === 13 || length === 16 || length === 19)) {
     network = 'Visa';
  }  else if (cardNumber.search(mcRegex) === 0 && length === 16) {
     network = 'MasterCard';
  }  else if (cardNumber.search(discRegex) === 0 && (length === 16 || length === 19)) {
     network = 'Discover';
  }  else if (cardNumber.search(maestroRegex) === 0 && (length >= 12 && length <= 19)) {
     network = 'Maestro';
  }
  return network;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed');
  } else {
    console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual);
  }
}

detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('373456789012345');
detectNetwork('4123456789012');
detectNetwork('4123456789012345');
detectNetwork('4123456789012345678');
detectNetwork('5112345678901234');
detectNetwork('5212345678901234');
detectNetwork('5312345678901234');
detectNetwork('5412345678901234');
detectNetwork('5512345678901234');
