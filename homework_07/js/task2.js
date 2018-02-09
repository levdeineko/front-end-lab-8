var ques=confirm("Do you want to play a game?");
var prize = 0;
for(let i=1,j=1;;i++,j+=2){
  var left=0;
  var right=5*i;
  var digit =  Math.floor((Math.random() * right+left));
    if (ques==false){
      console.log(`You did not become a millionaire`);
      break;
    } else {
      for(let b=1,c=0; b<5, c<3;b*=2,c++){
        let prizeguess=10/b*j;
        let guess=prompt("Enter a number from "+left+" to " + right+
        "\nAttempts left: "+(3-c)+
        "\nTotal prize: "+prize+
        "$\nPossible prize on current attempt: " + prizeguess+'$','');
        if (guess==digit){
            prize+=prizeguess;
            break;
        }
      }
      if(prize==0){
        console.log("Thank you for a game. Your prize is: "+prize+'$');
        var ques1=confirm("Do you want to play again?",'');
        if (ques1==false){
          break;
        }
      } else{
        var ques2=confirm("Do you want to continue a game?", '');
        if (ques2==false){
          console.log("Thank you for a game. Your prize is: "+prize+'$');
          var ques1=confirm("Do you want to play again?",'');
          if (ques1==false){
            break;
          }

        }
      }
    }
}
