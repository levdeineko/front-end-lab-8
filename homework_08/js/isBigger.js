var a = +prompt("enter 1st value", '');
var b = +prompt("enter 2nd value", '');


function isBigger (a,b){
  var c=(a > b);
  return c;
}

console.log(isBigger(a,b));
alert(isBigger(a,b));
