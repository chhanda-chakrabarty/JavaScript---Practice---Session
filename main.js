// Arrray Methods in action

// let arr = [10, 20, 30, "abcd", "Myname",45];

// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i]);
// }

// Method 1-push

// let arr = [10, 20, 30, 45, 25, "afjal", "jakir", 10, 20];

// let result = arr.pop();
// let result2 = arr.pop();

// arr.unshift("Xeon");
// arr.unshift("Redon");

// arr.shift();
// arr.shift();

// console.log(arr);

// let map = arr.map((item) => {
//   console.log(item);
// });

//  Object literals

// const obj = {
//   name: "chhanda",
//   age: 23,
//   nid: 123456,
//   position: "frontend engineer",
// };

// let add = ((obj.salary = 20000), (obj.company = "creative"));

// delete obj.name;

// console.log(obj);

// DOM
//  Querselector - innerHTML - innerText - style

// let header = (document.querySelector(".header").style.color = "green");

// console.log(header);

// let color = console.log(header);

// EventListener -

// let button = document.querySelector(".btn");
// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");
// let btn3 = document.querySelector(".btn3");
// let btn4 = document.querySelector(".btn4");
// let btn5 = document.querySelector(".btn5");

// let btn = button.addEventListener("click", function () {
//   //   console.log("clicked");
//   alert("clicked");
// });

// let firstBtn = btn1.addEventListener("click", () => {
//   alert("First button Clicked");
// });

// let secondBtn = btn2.addEventListener("click", () => {
//   alert("Second button Clicked");
// });

// let thirdBtn = btn3.addEventListener("click", () => {
//   console.log("clicked you assessment");
// });

// let fourthBtn = btn4.addEventListener("click", () => {
//   number = number - 1;

//   console.log(number);
// });

// let number = 0;

// let fifthBtn = btn5.addEventListener("click", () => {
//   number = number + 1;

//   console.log(number);
// });
// console.log(button);

// math table
// let x = +prompt("Enter a Number");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${x} x ${i} = ${x * i}`);
// }

// DOM math table

// let input = document.querySelector(".input");
// let btn = document.querySelector(".btn_1");
// let header = document.querySelector(".header");

// // let h1 = header.innerHTML;

// // console.log(btn);

// let button = btn.addEventListener("click", () => {
//   header.innerHTML = "";
//   let number = input.value;

//   if (number == "") {
//     console.log("Nothing here!");
//   } else {
//     for (let i = 1; i <= 10; i++) {
//       header.innerHTML += `${number} x ${i} = ${number * i} <br/>`;
//     }
//   }
// });

// Array Destructuring

// let arr = ["rakib", "sujon", "mamun", "sagor", "Ashjad"];

// let [a, b, c, d, e] = arr;

// let obj = { name: "chhanda", age: 31, address: "Mym", school: "MLHS" };

// let { name, age, address, school } = obj;

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];

//   console.log(element);
// }

// console.log(school);

// arr.map((item) => {
//   console.log(item);
// });

// Spread and Rest Operator

// spread operator
// let obj = {
//   name: "chhanda",
//   age: 23,
//   nid: 124567,
//   address: "mym",
//   contact: 01234514578,
// };

// let spread = { ...obj, shirt: "black" };

// console.log(spread);

// Rest Operator

// function number(...a) {
//   console.log(a);
// }

// number(10, 20, 23, 25, 65, 41, 84, 35, 55);

let arr = ["chhanda", "aytik", "jumma", 32, 45];
console.log(...arr, "maruf");

let digit = (...a) => {
  //   console.log(a);
};

digit("chhanda", 31, 1234567, "MYM", "CyberCrime");
