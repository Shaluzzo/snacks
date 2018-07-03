var list1 = [];
var list2 = [];


for (var i = 0; i < 100; i++) {

  var random = randomIntFromInterval(1,100);
  list1.push(random);
  var random2 = randomIntFromInterval(1,100);
  list2.push(random2);
}

console.log(sommaArray(list1));
console.log(sommaArray(list2));

function sommaArray(array){
   var somma = 0;
   for (var i = 0; i < array.length; i++) {
     somma += array[i];
   }
  return somma;
}


function randomIntFromInterval(min,max) {

    return Math.floor(Math.random()*(max-min+1)+min);
}
