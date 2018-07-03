var wordone = prompt('Inserisci una parola');
var wordtwoo = prompt('Inserisci una parola');

if (wordone.length > wordtwoo.length) {
   console.log(wordone);
   console.log(wordtwoo);
}
else if (wordone.length < wordtwoo.length) {
   console.log(wordtwoo);
   console.log(wordone);
}
else {
  console.log('Parole uguali');
}
