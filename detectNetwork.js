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
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
// Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

var detectNetwork = function(cardNumber) {
  // Define regex match for each prefix
  // Search cardNumber for prefixes (prefixes should be found at index 0)
  let network = '';
  let length = cardNumber.length;

  // Regular expressions for each card network
  // Great resource: http://gamon.webfactional.com/regexnumericrangegenerator/
  let dcRegex = /(38|39)/;
  let amexRegex = /(34|37)/;
  let visaRegex = /(4)/;
  let mcRegex = /(51|52|53|54|55)/;
  let discRegex = /(6011|65|64[4-9])/;
  let maestroRegex = /(5018|5020|5038|6304)/;
  let cuRegex = /(62212[6-9]|6221[3-9][0-9]|622[2-8][0-9]{2}|6229[01][0-9]|62292[0-5]|62[4-6]|628[2-8])/;
  let switchRegex = /(4903|4905|4911|4936|564182|633110|6333|6759)/;
  let visaSwitchOverlap = /(4903|4905|4911|4936)/

  if (cardNumber.search(dcRegex) === 0 && length === 14) {
     network = 'Diner\'s Club';
  } else if (cardNumber.search(amexRegex) === 0 && length === 15) {
  	 network = 'American Express';
  } else if (cardNumber.search(visaSwitchOverlap) === 0 && (length === 16 || length === 19)) {
     network = 'Switch';
  } else if (cardNumber.search(visaRegex) === 0 && (length === 13 || length === 16 || length === 19)) {
     network = 'Visa';
  } else if (cardNumber.search(mcRegex) === 0 && length === 16) {
     network = 'MasterCard';
  } else if (cardNumber.search(discRegex) === 0 && (length === 16 || length === 19)) {
     network = 'Discover';
  } else if (cardNumber.search(maestroRegex) === 0 && (length >= 12 && length <= 19)) {
     network = 'Maestro';
  } else if (cardNumber.search(cuRegex) === 0 && (length >= 16 && length <= 19)) {
     network = 'China UnionPay';
  } else if (cardNumber.search(switchRegex) === 0 && (length === 16 || length === 18 || length === 19)) {
    network = 'Switch';
  }

  return network;
}
