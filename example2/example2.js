var dec = 123;
var hexadec = 0x37cf;
var octa = 255;
var bina = 12;
var floa = 10.8788;
console.log(dec);
console.log(hexadec);
console.log(octa);
console.log(bina.toExponential());
console.log(floa.toFixed());
console.log(floa.toLocaleString());
var fname = "rahul ";
var lname = "kumar";
var fullname = '${fname}' + " " + '${lname}';
console.log(fname);
console.log(lname);
console.log(fullname);
console.log(fname.charAt(2));
console.log(fullname.lastIndexOf('r'));
var isTrue = true;
console.log(isTrue);
//using square brackets how to declare an array
var items = ['soap', 'sampoo', 'biscuit'];
console.log(items);
//using generic type how to declare an array
var arr = [1, 2, 3, 'Arun', 'kumar', true, false];
console.log(arr);
var name1;
name1 = ['rahul', 'prince', 'mukul'];
console.log(name1);
var demo = ['Apple', 3, 'Orange', 4, 'Grape', 6];
demo.push('Bannana');
demo.push(7);
demo.sort();
console.log(demo);
console.log(demo[0]);
for (var index in demo) {
    console.log(demo[index]);
}
