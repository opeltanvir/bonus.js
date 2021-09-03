// var marks = [85,57,28,97,87,];

// for(var i = 0; i< marks.length;i++){
//     var element = marks[i];
//     console.log(element);
// }

// function add(number1, number2){
//     var total = number1+ number2 ;
//     return total;
// }
// var result1 = add(65, 89);
// console.log(result1);


function largetnumber (numbers){
    var larger = numbers[0];
    for(var i = 0;i < numbers.length; i++){
        var element = numbers[i];
        if ( element > larger) {
            larger =element;
        }
    
    }
    return larger;

}
var numbers = [65, 45, 23,11, 89, 91];
var output = largetnumber(numbers);
console.log('output',output);

