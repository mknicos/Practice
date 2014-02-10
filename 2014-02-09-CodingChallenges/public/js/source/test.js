/* global test, deepEqual, longestWord :false */

'use strict';

test('longest word', function(){
  var string = 'This is a string with words in it';

  deepEqual(longestWord(string),'string', 'the longest word in the string should be string');
});

