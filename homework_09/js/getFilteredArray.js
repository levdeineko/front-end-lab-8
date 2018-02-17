var myArray = prompt("Please enter all the digits with spaces in between'-digits equal and bigger than 5 will be displayed'").split(" ");

function getFilteredArray(arr, func){
  var array=[];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])===true)
    array.push(arr[i]);
  }
  return array;
}

function biggerthan(num){
  return num >= 5;
}

console.log(getFilteredArray(myArray,biggerthan));
