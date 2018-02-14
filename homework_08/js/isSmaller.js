var a = +prompt("enter 1st value", '');
var b = +prompt("enter 2nd value", '');


  function isBigger (a,b){
    var c=(a > b);
    return c;
  }

  function isSmaller(d,e){
    if (isBigger(d,e)===true) return false;
    else return true;
  }

console.log(isSmaller(a,b));
alert(isSmaller(a,b));
