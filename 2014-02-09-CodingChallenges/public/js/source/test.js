/* global test, deepEqual, longestWord, arrayAddition :false */

'use strict';

test('longest word', function(){
  var string = 'This is a string with words in it';

  deepEqual(longestWord(string),'string', 'the longest word in the string should be string');
});

test('Array Addition', function(){
  var numArray = [4,6,23,10,1,3];
  var numArray2 = [5,7,16,1,2];
  var numArray3 = [3,5,-1,8,12];

  deepEqual(arrayAddition(numArray), true, 'the other numbers should be able to add up to the largest num');
  deepEqual(arrayAddition(numArray2), true, 'the longest word in the string should be string');
  deepEqual(arrayAddition(numArray3), true, 'the other numbers should be able to add up to the largest num');
});
