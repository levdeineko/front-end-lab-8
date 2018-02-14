var myArray = prompt("Please enter all the digits with spaces in between").split(" ");

function getMin(){
  var min = Math.min.apply(null, myArray);
  return min;
}

alert(getMin());
