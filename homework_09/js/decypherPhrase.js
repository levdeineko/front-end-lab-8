var str = prompt("Please enter 'Kiggy dog'").split("");

var charactersMap = {a: "o", c: "d", t: "g"};

function decypherPhrase(characters,array) {
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < Object.keys(characters).length; k++) {
    if (array[i]===Object.values(characters)[k])
    array[i]=Object.keys(characters)[k];
    }
  }
  return array.join("");
}

console.log(decypherPhrase(charactersMap,str));
