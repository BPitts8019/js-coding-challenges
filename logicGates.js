/*
Good morning! Today we will be emulating "logic gates" with JavaScript. Our 
functions will emulate the "not", "and", "not and", inclusive "or" and 
exclusive or "xor" operators.

   1. For your emulation functions, you're limited to only using the deep 
      equality operator === and if (conditional) {statements}
   2. Do not use !, &&, or ||.
   3. Do not use the functions you have created to emulate any of the other 
      logic gates, e.g. don't use your NOT() function in the NAND() function.

Your NOT() function only takes one parameter.
Your other functions will take two inputs and return a Boolean value which 
corresponds to the conditions satisfied by their logical operator.
To illustrate this behavior, refer to the truth tables below.

TRUTH TABLES
NOT
| phi | !phi |
|-----|------|
|  T  |   F  |
|  F  |   T  |

AND
| phi | psi | phi & psi |
|-----|-----|-----------|
|  T  |  T  |     T     |
|  T  |  F  |     F     |
|  F  |  T  |     F     |
|  F  |  F  |     F     |

NAND
| phi | psi | !(phi & psi) |
|-----|-----|--------------|
|  T  |  T  |       F      |
|  T  |  F  |       T      |
|  F  |  T  |       T      |
|  F  |  F  |       T      |

inclusive OR
| phi | psi | phi ^ psi |
|-----|-----|-----------|
|  T  |  T  |     T     |
|  T  |  F  |     T     |
|  F  |  T  |     T     |
|  F  |  F  |     F     |

exclusive OR
| phi | psi | phi XOR psi |
|-----|-----|-------------|
|  T  |  T  |      F      |
|  T  |  F  |      T      |
|  F  |  T  |      T      |
|  F  |  F  |      F      |
*/
function NOT (b) {
   return (b)? false : true;
}

function AND (x, y) {
   if (x === false) return false;
   if (y === false) return false;
   
   return true;
}

function NAND(x, y) {
   if (x === false) return true;
   if (y === false) return true;
   
   return false;
}

function OR(x, y) {
   if (x === true) return true;
   if (y === true) return true;
   
   return false;
}

function XOR(x, y) {
   if (x === y) return false;

   return true;
}

//NOT Gate tests
console.log("\n//--- NOT Gate tests ---//");
console.log(NOT(true)); // ---> false
console.log(NOT(false)); // ---> true

//AND Gate tests
console.log("\n//--- AND Gate tests ---//");
console.log(AND(true, true));   // ---> true
console.log(AND(true, false));  // ---> false
console.log(AND(false, true));  // ---> false
console.log(AND(false, false)); // ---> false

//NAND Gate tests
console.log("\n//--- NAND Gate tests ---//");
console.log(NAND(true, true));   // ---> false
console.log(NAND(true, false));  // ---> true
console.log(NAND(false, true));  // ---> true
console.log(NAND(false, false)); // ---> true


//OR Gate tests
console.log("\n//--- OR Gate tests ---//");
console.log(OR(true, true));   // ---> true
console.log(OR(true, false));  // ---> true
console.log(OR(false, true));  // ---> true
console.log(OR(false, false)); // ---> false

//XOR Gate tests
console.log("\n//--- XOR Gate tests ---//");
console.log(XOR(true, true));   // ---> false
console.log(XOR(true, false));  // ---> true
console.log(XOR(false, true));  // ---> true
console.log(XOR(false, false)); // ---> false