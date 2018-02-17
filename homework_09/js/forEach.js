var myArray = prompt("Please enter all the digits with spaces in between'-sqrt will be found'").split(" ");

function forEach(array,myfunc){
  myfunc(array);
};

forEach(myArray,function() {
  for (var i = 0; i < myArray.length; i++) {
    console.log(Math.sqrt(myArray[i]));
  }
});
