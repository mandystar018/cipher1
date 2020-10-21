$(document).ready(function(){

  const sentence = (prompt('Write a sentence'));
  console.log(sentence);

function newString(sentence){
  const last = sentence.charAt(sentence.length-1).toUpperCase();
  const first = sentence.charAt(0).toUpperCase();
  const result = first + last;
  return result;
}

function order(string){
  return string.slice(-1) + string[0];
}

function callFunc(){
  let b = newString(sentence);
  let a = order(b);
  return sentence + a;
}

  function fourth(){
    return sentence.length().reverse();
  }

alert(newString(sentence));
alert(order(sentence));
alert(callFunc(sentence));
alert(fourth(sentence));
});