var str = prompt("Please enter 'Kitty cat'").split("");

var charactersMap = {a: "o", c: "d", t: "g"};

function cypherPhrase(characters,array) {
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < Object.keys(characters).length; k++) {
    if (array[i]===Object.keys(characters)[k])
      array[i]=Object.values(characters)[k];
    }
  }
  return array.join("");
}

console.log(cypherPhrase(charactersMap,str));
