var guestArr = parseInt(prompt('Quanti array vuoi generare'));

var arr = [];

for (var i = 0; i < guestArr; i++) {

   var newArr = [];

for (var j = 0; j < 10; j++) {

   var random = randomIntFromInterval(1,10);
   newArr.push(random);

}

   arr.push(newArr);

}
console.log(arr);


function randomIntFromInterval(min,max) {

    return Math.floor(Math.random()*(max-min+1)+min);
}
