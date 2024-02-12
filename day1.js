//console.log("Hello World!");
// ini adalah command single line


/*
ini 
adalah
command
multiline 
*/

// VARIABLE ==========================================
//let message; // declare variable
//message = "hello Jogja!"; // memasukkan data ke variable
//console.log(message);

// var globalVariable = "ini adalah var";

// var globalVariable = "ini adalah var2";

// let replaceable = "ini bakalan diganti isinya";
// replaceable = "i love javascript";

// const constant = "Hello Purwadhika";

//VARIABLE NAMING=============================
//let budii;
// let 01budi; => ini gaboleh
//let _01budi;
//let $01budi;

// DATA TYPES================================
// primitive data types = string, number, boolean, null, undefined
// const string = "string";
// const number = 10;
// const boolean = true;
// let data;
// let data1 = null;

// console.log(data);
// console.log(data1);

// const person = {
//     key :"value",
//     key2 :"value2",
//     key3 :"value3",
// };
// console.log(person.key2);

//Aray
//const Array = ["satu", "dua", "tiga"];

//TYPEOF
// const pesan = "javascript";
// const count = 1;

// console.log(typeof pesan);

//Mutable & immutable
//mutable : variable yang bisa di ubah datanya
//immutable : object yg tidak bisa diubah saat sudah dibuat

//mutable
// let count1 = 4;
// let count2 = count1;
// count2 = 10;

// console.log(count1);
// console.log(count2);

//immutable
// let person1 = [
     //name :"budi",
// ];

// let person2 = person1;
// person2.age = 20;

// console.log(person1);
// console.log(person2);

//STRING BUILT IN METHOD
// const nama = "budi";
// const nama1 = "sultan";
// const nama2 = 4;

// console.log(nama.toUpperCase());
// console.log(nama.toLowerCase());
// console.log(nama.replace("u", 'h'));
// console.log(nama1.slice(0, 3));
// console.log(nama.split(""));
// console.log(nama.concat(nama1));
// console.log(nama1.includes("jogja"));
// console.log(nama.substring(1, 3));
// console.log(nama1.substr(1, 3));
// console.log(nama1.trim());
// console.log(nama2.padStart(2, '0'));
// console.log(nama2.padEnd(2, '0'));
// console.log(nama.chartAt());
// console.log(nama.charCodeAt());
// console.log(nama.indexOf());
// console.log(nama.lastIndexOf());

//Template Literals
// const namu = "buci";
// const messuge = "welcome";

// console.log(messuge);
// console.log(`$(message) $(namu)`);
// console.log(`welcome $(namu)` );

//Number builtin method
// const angka = "10";

// let angka1 = Number(angka);

// console.log(typeof angka);
// console.log(typeof Number(angka)); // mengubah type data string
// console.log(typeof parseInt(angka)); // mengubah type data string
// console.log(typeof parseFloat(angka));

// console.log(angka);
// console.log(Number(angka));

// console.log(angka1); 

// console.log(angka1.toString());
// console.log(angka1.toExponential());
// console.log(angka1.toFixed());
// console.log(angka1.toPrecision());
// console.log(angka1.valueOf());
//NaN = not a number

//type conversion 
//string conversion
//console.log(typeof String(123));

//number conversion 
// const num = "3" * "3";
// console.log(num);

//boolean conversion
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean("hello"));
// console.log(Boolean(""));

//date data type
// const nuw = new Date();
// console.log(nuw);

//today
// const jan01_1970 = new Date(0);
// console.log(jan01_1970);

// const jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(jan02_1970);

// const jan03_1970 = new Date("2017-01-26");
// console.log(jan03_1970);

// const jan04_1970 = new Date(0);
// console.log(jan04_1970);

// let date = new Date("2017-01-26");
// console.log(date);

// date build in method
//const now = new Date("2017-01-26");

//get method
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());
// console.log(now.getDay());
// console.log(now.Date.now());
// console.log(now.Date.parse());

//set method
// now.setDate(11);
// console.log(now);
// now.setFullYear(2027);
// console.log(now);
// now.setHours(1);
// console.log(now);
// now.setMilliseconds(2);
// console.log(now);
// now.setMinutes(3);
// console.log(now);
// now.setMonth(4);
// console.log(now);
// now.setSeconds(5);
// console.log(now);
// now.setTime(6);
// console.log(now);

//basic operator
// console.log(1 + 1);
// console.log(2 - 1);
// console.log(2 * 2);
// console.log(4 / 2);
// console.log(2 % 1);
// console.log(12 ** 1);

//modify in place

//let n = 2;
// n += 5
// n *= 2
//console.log(n);

//increment & decrement

//let counter = 2;
// counter --;
// counter ++;

//console.log(counter);

//precounter & postcounter
// let preCounter = 0;
// console.log(++preCounter);
// console.log(preCounter);

// let postCounter = 0;
// console.log(postCounter++);
// console.log(postCounter);
