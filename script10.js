var words = ['gatto','cane','elefante','giraffa','leone','squalo','tigre']
var randomstring = "";
var numbers = ['1','2','3','4','5','6','7'];

for (var i = 0; i < 3; i++) {

  var rlet = Math.floor(Math.random() * words.length);
  randomstring += words[rlet];
}

for (var i = 0; i < 1 ; i++) {

  var rnum = Math.floor(Math.random() * numbers.length);
  randomstring += numbers[rnum];
}

console.log(randomstring);
