var obj = {
    name:'peter',
    gender: 'male'
}

// var newObj = {
//     name:'peter',
//     gender: 'female'
// }

var e = {
    target: {
        name: 'peter',
        value: 'value'
    }
}

console.log(newObj);

//키값 부르고,
const { target: { name, value } } = e;
//키값의 value 출력
console.log('what cha name?', name, value);


var number = 12;
var number2 = 24;
var number3 = 36;

number += number2;
// console.log(number)
number += number3
// console.log(number)


// var arr = [ ]