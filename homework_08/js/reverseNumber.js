var myArray = prompt("Please enter all the digits with the spaces in between","").split(' ');
console.log(myArray);

 function reverseNumber(){
  newArr=myArray.reverse();
  return newArr;
}


alert(reverseNumber());
