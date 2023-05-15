
let dec :number =123;
let hexadec :number=0x37cf;
let octa :number=0o377;
let bina:number=0b1100;
let floa: number= 10.8788;
console.log(dec);
console.log(hexadec);
console.log(octa);
console.log(bina.toExponential());
console.log(floa.toFixed());
console.log(floa.toLocaleString());

let fname:string="rahul ";
let lname:string="kumar";
 let fullname ='${fname}'+" "+'${lname}';

console.log(fname);
console.log(lname);
console.log(fullname);
console.log(fname.charAt(2));
console.log(fullname.lastIndexOf('r'));

let isTrue:boolean = true;
console.log(isTrue);
//using square brackets how to declare an array
let items:string []=['soap','sampoo','biscuit'];
console.log(items);
//using generic type how to declare an array
let arr=[1,2,3,'Arun','kumar',true,false];
console.log(arr);

let name1:Array<string>;
name1=['rahul','prince','mukul'];
console.log(name1);

let demo:(string|number)[]=['Apple',3,'Orange',4,'Grape',6];
demo.push('Bannana');
demo.push(7);
demo.sort();
console.log(demo);
console.log(demo[0]);
for(let index in demo){
    console.log(demo[index]);
}