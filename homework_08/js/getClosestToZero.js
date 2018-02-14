var myArray = prompt("Please enter all the digits with spaces in between").split(" ");

function getClosestToZero (digit, arr){
  var curr = arr[0];
  var diff= Math.abs (digit-curr);
  for (i=0; i<arr.length; i++){
     var newdiff =Math.abs(digit - arr[i]);
     if (newdiff < diff){
       diff=newdiff;
       curr=arr[i];
     }
  }
  return curr;
}

alert(getClosestToZero(0,myArray));
