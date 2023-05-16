/*function display(num:number){
    if(num%2==0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}
console.log(display(23));*/
//Ternary operator
var x = 10, y = 20;
x < y ? console.log("X is lesser") : console.log("Y is lesser");
var day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
        console.log("Give days from 1-7");
}
for (var i_1 = 0; i_1 < 4; i_1++) {
    console.log("Block Execution " + i_1);
}
//for of loop
var arr1 = [1, 2, 3, 4];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var v = arr1_1[_i];
    console.log(v);
}
//for in loop
var str1 = "Hello world";
for (var ch in str1) {
    console.log(str1[ch]);
}
//while loop
var i = 0;
while (i <= 4) {
    console.log("While loop execution " + i);
    i++;
}
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
//annonymous function
var mul = function (m, n) {
    return m * n;
};
console.log(mul(10, 40));
//optional parameter with or without value only last parameter can be optional parameter
function demo2(fName, lName) {
    return fName + " " + lName;
}
console.log(demo2("Arun"));
