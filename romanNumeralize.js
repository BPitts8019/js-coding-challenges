/*
Good morning! Define a function that takes in a positive integer and returns 
the Roman Numeral representation of that number.

Symbol    Value
  I         1
  IV        4
  V         5
  IX        9
  X         10
  XL        40
  L         50
  XC        90
  C         100
  CD        400
  D         500
  CM        900
  M         1,000
*/
function romanNumeralize(n) {
   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
   let currentNum = n;
   let index = 0;
   let rtnString = "";

   while (currentNum > 0) {
      if (currentNum >= values[index]) {
         rtnString += numerals[index];
         currentNum -= values[index];
      } else {
         index++;
      }
   }

   return rtnString;
}

console.log(romanNumeralize(1973)); // "MCMLXXIII"
console.log(romanNumeralize(3587)); // "MMMDLXXXVII"
console.log(romanNumeralize(2018)); // "MMXVIII"
console.log(romanNumeralize(2019)); // "MMXIX"
console.log(romanNumeralize(1901)); // "MCMI"
