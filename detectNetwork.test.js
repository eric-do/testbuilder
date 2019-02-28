/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

/* TESTS */
describe('Diner\'s Club', function() {
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  let prefArr = [38, 39];
  let lengthArr = [14];

  executeTests(prefArr, lengthArr, 'Diner\'s Club');
});

describe('American Express', function() {
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  let prefArr = [34, 37];
  let lengthArr = [15];

  executeTests(prefArr, lengthArr, 'American Express');
});

describe('Visa', function() {
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  let prefArr = [4];
  let lengthArr = [13, 16, 19];

  executeTests(prefArr, lengthArr, 'Visa');
});

describe('MasterCard', function() {
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  let prefArr = [51, 52, 53, 54, 55];
  let lengthArr = [16];

  executeTests(prefArr, lengthArr, 'MasterCard');
});

describe('Discover', function() {
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  let prefArr = [6011, 644, 645, 646, 647, 648, 649, 65];
  let lengthArr = [16, 19];

  executeTests(prefArr, lengthArr, 'Discover');
});

describe('Maestro', function() {
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  let prefArr = [5018, 5020, 5038, 6304];
  let lengthArr = [12, 13, 14, 15, 16, 17, 18, 19];

  executeTests(prefArr, lengthArr, 'Maestro');
});

describe('China UnionPay', function() {
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  let arrayA = createArrayFromRange(622126, 622925);
  let arrayB = createArrayFromRange(624, 626);
  let arrayC = createArrayFromRange(6282, 6288);
  let lengthArr = [16, 17, 18, 19];

  executeTests(arrayA, lengthArr, 'China UnionPay');
  executeTests(arrayB, lengthArr, 'China UnionPay');
  executeTests(arrayC, lengthArr, 'China UnionPay');
});

describe('Switch', function() {
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  let prefArr = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  let lengthArr = [16, 18, 19];

  executeTests(prefArr, lengthArr, 'Switch');
});


/* SUPPORT FUNCTIONS */
function createArrayFromRange(min, max) {
  let array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

function executeTests(prefixArray, lengthArray, network) {
  // Loop array of prefixes
    // Loop array of valid lengths
      // Create testName from prefix and length
      // Fill an array to create a test cardNumber
      // Execute test using testName and cardNumber
  var should = chai.should();

  prefixArray.forEach(function(prefix){
    lengthArray.forEach(function(length) {
      let testName = 'has a prefix of ' + prefix + ' and a length of ' + length;
      let prefixArr = prefix.toString().split('');
      let arrBuffer = (new Array(length - prefixArr.length)).fill('0');
      let testCard = prefixArr.concat(arrBuffer).join('');

      it(testName, function() {
        detectNetwork(testCard).should.equal(network);
      });
    });
  });
}
