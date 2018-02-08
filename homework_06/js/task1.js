var a = +prompt('Enter value');
var b = +prompt('Enter value');
var c = +prompt('Enter value');

function tup(a,b,c) {
if ((a*a+b*b===c*c) || (a*a+c*c===b*b) || (c*c+b*b===a*a)){
  return "Right triangle";
}

  else if (a===b&&b===c){
      return "Equilateral triangle";
   }
  else if ((a===b) || (b===c) || (c===a)){
      return "Isosceles triangle";
   }
  else {
    return "Scalene triangle";
  }
}

function area(a,b,c) {
  var p = (a+b+c)/2;
  var area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  if(!area.toString().includes('.'))
  return area;
  else return  area.toFixed(2);
}



if ((a<=0) || (b<=0) || (c<=0)) {
  console.log("incorrect data!");
}
  else {
    if ((a+b>c) && (a+c>b) && (b+c>a)){
    console.log("Type of triangle is "+tup(a,b,c)+" and square is " +area(a,b,c));
    }
      else{
        alert("Triangle cannot be formed by these 3 sides");
        console.log("Incorrect data!");
      }
  }
