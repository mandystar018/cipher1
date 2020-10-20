$(document).ready(function(){

  const sentence = (prompt('Write a sentence'));
  console.log(sentence);

function newString(sentence){
  const last = sentence.charAt(sentence.length-1).toUpperCase();
  const first = sentence.charAt(0).toUpperCase();
  const result = first + last;
  return result;
}
let reverse = newString(sentence);

function order(){

  const newFirst = first[0];
  const newLast = last[1];
  const together = newFirst + newLast;
  return together;
}
alert(newString(sentence));
alert(order(reverse));
});