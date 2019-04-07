console.log('Text');  // задание 1


console.log("");


var Car = {
  make: "Nissan",                // задание 2,3
  model: "GTR",
  year: 2015,
  say: function(){
    return 'fast furious';
  }
}
Car.year = 2019;

console.log(Car);
console.log(Car.say());


console.log("");


for (var i = 1; i <= 20; i++){
  if (i % 2 == 0){                 // задание 4
    console.log(i);
  }
}


console.log("");


var MyCity = 'Kharkov',
Status;
switch(MyCity){
  case 'Kharkov': Status = 'Village';    // задание 5
  case 'Keleberda': Status = 'Village'; 
  case 'Komsomolsk': Status = 'Township'; 
  default: Status = 'City';
}
console.log(MyCity + ' ' + Status);


console.log("");


var x = 8;
var text = x < 7 ? 'x меньше 7': x > 7 ? 'x больше 7': 'x равен 7';      // задание 6
console.log(text);


console.log("");


var i = 0;
while (i < 8){           // задание 7
  console.log(i++);
}


console.log("");


    function someFunction(x, y, callback){
    var pow = function (x, n){
        if (n !== 1){ 
            return x *= pow(x, n - 1);
        }
        else{                                       // задание 8
            return x;
        }
    };  
        callback(pow(x, y));
}
    someFunction(2, 4, function (result){
    console.log("Результат арг3:   " + result);
});
