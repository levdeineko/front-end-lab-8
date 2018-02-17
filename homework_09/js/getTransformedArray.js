var myArray = prompt("Please enter all the digits with spaces in between'-will be multiplied by 8'").split(" ");

function getTransformedArray(x,myfunc){
  myfunc(x);
  console.log(myfunc(x));
};

function multiplyBy8(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]*=8;
  }
  return array;
}

var res = getTransformedArray(myArray,multiplyBy8);
