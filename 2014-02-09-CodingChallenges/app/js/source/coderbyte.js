/*exported longestWord */

function longestWord(sen) {
  'use strict';
  sen = sen.split(' ');
  var max = 0,
      longest = '',
      num;
  for(var i = 0; i < sen.length; i++){
    debugger;
    num = sen[i];
    if(num.length > max){
      max = sen[i].length;
      longest = num;
    }
  }
  sen = longest;
  return sen;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
