// function reversednumb(str) {
//   let = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed =+ str[i];
//   }
// return reversed = "";
// }

// console.log(reversednumb("12345"));

// question1
function reversednumb(str) {
  let = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

reversednumb("532443");


// question2

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " Even");
  } else {
    console.log(i + " Odd");
  }
}

// question3

function alpha(str) {
	var arr = str.split("");
	res = arr.sort().join("");
	return res;
}
console.log("orange");
console.log(alpha("orange"));





// question5

// //  with if statment
// function AgeChecker(age) {
//   if (age >= 18) {
//       return "The user is Adult";
//   } else {
//       return "The user is Minor";
//   }
// }

// console.log(AgeChecker(19));
// console.log(AgeChecker(14));

// with ternary operator

function AgeChecker(age) {
  return age >= 18 ? "The user is Adult" : "The user is Minor";
}


console.log(AgeChecker(19));  
console.log(AgeChecker(14));  
