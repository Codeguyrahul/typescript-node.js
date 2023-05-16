/*function display(num:number){
    if(num%2==0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}
console.log(display(23));*/
//Ternary operator
let x:number = 10,y=20;
x<y?console.log("X is lesser"):console.log("Y is lesser");
let day:number=4;
switch(day){
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
for(let i=0;i<4;i++){
    console.log("Block Execution "+i);
}
//for of loop
let arr1=[1,2,3,4];
for(var v of arr1){
    console.log(v);
}
//for in loop
let str1:any="Hello world";
for(var ch in str1){
    console.log(str1[ch]);
}
//while loop
let i:number=0;
while(i<=4){
    console.log("While loop execution "+i);
    i++;
}
function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(10,20));
//annonymous function
let mul=function(m:number,n:number):number{
    return m*n;
}
console.log(mul(10,40));
//optional parameter with or without value only last parameter can be optional parameter
function demo2(fName:string,lName?:string):string{
    return fName+" "+lName;
}
console.log(demo2("Arun"));

