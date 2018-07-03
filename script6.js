var guestnumber = [];
var somma = 0

for (var i = 0; i < 10 ; i++) {
  var number = parseInt(prompt('scegli un numero'));
  guestnumber.push(number);

if ((number % 3) == 0) {

  somma = somma + number;
}

}
console.log(somma)
