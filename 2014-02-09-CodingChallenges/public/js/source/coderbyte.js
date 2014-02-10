/*exported meanMode, arrayAddition, longestWord */

function longestWord(sen) {
  'use strict';
//Function will return the longest word in a string

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

function arrayAddition(arr){
  'use strict';
//Function will return true if all the numbers besides the largest
//can add up to the largest

  var largestNum = 0, newArray = [];
//Find largest number
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > largestNum){
      largestNum = arr[i];
    }
  }
//Make an array of all numbers but the largest number
  for(var j = 0; j < arr.length; j ++){
    if(arr[i] !== largestNum){
      newArray.push(arr[i]);
    }
  }
//see if it's possible to add up to the largest numbers using the new Array
  for(var k = 0; k < newArray.length; k ++){
    //need to finish code here
  }
}

function meanMode(array){
  'use strict';

  array = array.sort();
}
