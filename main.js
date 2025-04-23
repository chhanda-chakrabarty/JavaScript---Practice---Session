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
let x = +prompt("Enter a Number");
for (let i = 1; i <= 10; i++) {
  console.log(`${x} x ${i} = ${x * i}`);
}
