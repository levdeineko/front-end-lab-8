var a = +prompt('Enter value - Euros');
var b = +prompt('Enter value - Dollars');

function euros(a){
  return a*33.46 ;
}

function dollars(b){
  return b*27.11;
}


console.log(a +" euros are equal " +euros(a) +" UAH, " +b +" dollars are equal " +dollars(b) +" UAH, one euro is equal " +(euros(a)/dollars(a)).toFixed(3) +" dollars")
