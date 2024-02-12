// if statement==========================================
// const umur =21;

// if (umur >= 17) {
//     console.log("anda bisa buat ktp");
// }

//else statement ->backup plan dari if statement==========
// const age = 16;

// if (age >= 17) {
//     console.log("anda bisa buat ktp");
// } else {
//     console.log("anda belum bisa buat ktp");
// }

// else if condition -> if statement yang dicombine dengan else

// const grade ="E";
//  if (grade === "A") {
//     console.log("nilai bagus");
//  } else if (grade === "B") {
//       console.log("nilai lumayan");
//   } else if (grade === "C") {
//       console.log("nilai cukup");
//   } else if(grade === "D") {
//     console.log("nilai Kurang");
//   } else  {
//     console.log("tidak terpenuhi");
//   }

//switch case=============================================
// const day ="sss";
// switch (day) {
//     case "senin":
//         console.log("hari senin");
//         break;

//     case "selasa":
//         console.log("hari selasa");
//         break;

//     case "rabu":
//         console.log("hari rabu");
//         break;

//     default:
//         console.log("hari tidak ditemukan");
//         break;
// }

// logical operator -> &&, ||, !

// OR || -> jika salah 1 ada yg true bakal menghasilkan value true
//const car = "mercy";
//  true               false
// if (car === "mercy" || car === "bmw") {
//   console.log("mobil german");
// } else {
//   console.log("mobil jepang");
//}

// AND && -> harus keduanya true baru bakal menghasilkan value true
//const umur = 17;
//const punyaSIM = true;
//  true          true
// if (umur >= 18 && punyaSIM === true) {
//   console.log("boleh bawa kendaraan");
// } else {
//   console.log("belum boleh bawa kendaraan");
// }

// NOT-> membalikkan sebuah nilai boolean
// const isSunny = true;
// const isRaining = !isSunny;

// console.log(isSunny);
// console.log(isRaining);

// const isRaining = true;

// if (!isRaining) {
//   console.log("its a sunny day");
// } else {
//   console.log("rain");
// }

// ternary operator=======================================
// const str = "javascript";
// if (str === "javascript") {
//   console.log("javascript");
// } else {
//   console.log("not javascript");
// }

//rumus-> condition ? true : false
// console.log(str === "javascript" ? "javascript" : "not javascript");
// console.log(
//   str === "javascript"
/*? "javascript"
: str === "typescript"
? "typescript"*/
//     : "not javascript"
// );

//loop statement==========================================
//loop ==> perulangan
// type loop : for loop, while loop, do while loop

// for loop=> mempunyai 3 statement
// statement  1 menginisialisasi dari looping itu sendiri
// statement  2 mendefine kondisi dari looping tersebut
// statement  3 kode yang dieksekusi di akhir setiap iterasi

// for(let i = 0; i < 3; i++) {
//     console.log("hello world");
// }

//while loop
// let i = 0;
// while ( i < 20 ) {
//     console.log("halo");
//     i++;
// }

//do while
// let count = 1;
// do {
//   console.log("this is iteration" + count);
//   count++;
// } while (count <= 5);

//break -> untuk menghentikan loop bisa menggunakan break / return
// let sum = 0;
// while (true) {
//   console.log("sum = " + sum);

//   if(sum >= 5) break; // menghentikan loop => break/return sama aja

//   sum +=1; //sum = sum + 1
// }

//continue
// for (let i = 0; i < 5; i++) {
//   if(i === 3) {
//   continue;
// }
// console.log(i);
// }
