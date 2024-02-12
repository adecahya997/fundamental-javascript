//Array-> struktur data yang digunakan untuk menyimpan kumpulan nilai/element

// let arr = ["satu", "dua", "tiga"];
// let arr1 = new Array["satu", "dua", "tiga"];

// let arr2 = [1,2,3,4,5];
// let arr3 =  ["string", true]

// let arr4 =["string"]
// let arr5 = [
//     {id; 1.name; "budi"}
// ];

// const fruits = ["apel", "pisang", "cari"];

// for(const fruits of fruits) {
//     console.log(fruits);
// }


//function
//function declaration
// function square(){
//     return 1+1;
// }
// const result = square();
// console.log(square());

//function expression
// const square = function () {
//     return 1+1
// };

// const result = square();
// console.log(result);

//function scope=================================================
// function greeting() {
//     const hello = "hello";

//     return hello;

// console.log(hello);
// return hello;
// }

// parameter & argument

// argument = value yang dimasukkan saat pemanggilan function
// parameter = variable tang mewakili value dari argument di 

// function greeting(name) {
//     const hello ="hello";
//     return hello + " " + name;
// }

// const result = greeting("dui");
// const result2 = greeting("siti");

// console.log(result);
// console.log(result2);

//default parameter


// rest parameter===============================================

// function myFunc(a, b, ...more) {
//     console.log(a);
//     console.log(b);
//     console.log(more);
// }

// myFunc[1,2,3,4,5,6]

//nested fucntion============================================
//fungsi di dalam fungsi

// function getMessage(firstName){
//     function sayHello(){
//         return "hello" + firstName + ",";
//     }


//     function sayHello(){
//         return "welcome to Purwadhika";
//     }


//     return sayHello()+ " "+welcomeMessage();
// }

// console.log(getMessage("budi"));

//closure===================================================

// function greeting(name) {
//     const defaultMessage ="hello";

//     return function() {
//         return defaultMessage + name;
//     }
// };

// const greetingUser = gretting("siti");

// console.log(greetingUser());

//currying================================================
//non
// function tambah(a,b,c){
//     return a+b+c;
// }
// console.log(tambah(1+2+3));

//currying
// function tambah(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// const result = tambah(1)(2)(3);
// console.log(result);

//recursive= fungsi yang memanggil dirinya sendiri sampai habis valuenya

// function countDown(number){
//     console.log(number);

//     let nextNumber = number = 1;
    
//     if(nextNumber=0){
//         countDown(nextNumber);
//     }
// }

// countDown(10);

//arrow function= shortcut untuk mengalikan expression
//function expression 

//const square = function(number){
//    return number + number;
//};

//arrow function
//const square1 = (number)=>{
//    return number = number;
//};

//arrow function
//const square2=(number) => number+number;

//array built in method
//join
// let word = ["hello", "world"];
// console.log(word.join(""));

//pop
// let word = ["hello", "world"];
// word.pop();
// console.log(word);

//push
//shift

//unshift=>menambahkan value ke urutan paling depan array
// let word = ["hello", "world"];
// word.unshift("purwadhika");
// console.log(word);

//length=>melihat berapa banyak isi value dari sebuah array
// let word = ["hello", "world"];
// console.log(word.length);

//concat
// let word =["hello"];
// let words =["world"];
// console.log(word.concat(word));
// console.log(words.concat(words));

//splice->
//rumus->

// const months = ["jan","feb","mar","apr","mei"];
// months.splice(1,0, "feb")
// console.log(months);

// months.splice(4, 1);
// console.log(months);

// months.splice(3, 1, "mei")
// console.log(months);

//slice=>mereturn new array dengan value yangsudah kita tentukan 
// const fruit = ["nana", "orange", "manggo", "papaya"];
// console.log(fruit.slice(1, 3));

//indexof=> mencari index dari value yang kita cari
// const fruit = ["nana", "orange", "manggo", "papaya"];
// const index = fruit.indexOf("nana");
// console.log(index);

//reverse
//foreach
// const fruits = ["nana", "orange", "manggo", "papaya"];

// console.log(fruits.forEach);

//filter=================================================
// const ages =[23, 43, 15, 15];
// const result = ages.filter[(ages) == ages == 18];

// console.log(result);

//find 
// const age = [23, 43, 15, 15];

//reduce
//reduceRight