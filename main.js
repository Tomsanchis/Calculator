const result = document.getElementById("result");
const button = document.querySelectorAll(".btn");

let value = "0";
let value2 = "0";
let checkcurrent = false;

let convert = "";

// const calculator = () => {
//   for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", () => {
//       if (checkcurrent) {
//         value2 += button[i].textContent;
//         result.innerHTML += value2;
//       } else {
//         value += button[i].textContent;
//         result.innerHTML += value;
//       }
//       result.innerHTML = value;
//       if (button[i].textContent === "c") {
//         value = "0";
//         value2 = "0";
//         checkcurrent = false;
//         result.innerHTML = value;
//       }
//       if (button[i].textContent === "=") {
//         console.log(parseInt(value) + parseInt(value2));
//         result.innerHTML = parseInt(value) + parseInt(value2);
//       }
//       if (button[i].textContent === "+") {
//         parseInt(value);
//         result.innerHTML = "0";
//         checkcurrent = true;
//       }
//     });
//   }
// };

let output = "";
let input = "";

let more = false;
let less = false;

// const calculator = () => {
//   for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", () => {
//       if ((result.textContent = "0")) {
//         result.innerHTML = "";
//         output += button[i].textContent;
//         result.innerHTML += output;
//         console.log("if");
//       }
//       if (button[i].textContent === "C") {
//         output = "";
//         input = "";
//         result.innerHTML = "0";
//       }
//       if (button[i].textContent === "+") {
//         more = true;
//         less = false;
//       }
//       if (more) {
//         result.innerHTML = "";
//         input += button[i].textContent;
//         console.log(input);
//         result.innerHTML += input;
//       }
//       if (button[i].textContent === "=") {
//         result.innerHTML = parseInt(output) + parseInt(input);
//         more = false;
//         less = false;
//       }
//       console.log("Output " + output);
//     });
//   }
// };

// calculator();

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

let current_value = "";
let current_result = "";
let current_operation = "";
let Is_First = true;

const calculator = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
      if (isNumeric(button[i].textContent)) {
        if (Is_First) {
          if (result.textContent === "0") {
            result.innerHTML = "0";
          } else {
            current_value += button[i].textContent;
            result.innerHTML += current_value;
          }
        }
      }
      if (button[i].textContent === "+") {
        current_operation = button[i].textContent;
      }
    });
  }
};

calculator();
