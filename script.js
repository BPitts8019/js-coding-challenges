function longestString(arr) {
   return arr.reduce((acc, elem) => (elem.length > acc.length) ? elem : acc);
}
function reverseString(str) {
   if (str.length <= 2) return str;

   let strArray = Array.from(str);
   for (let idx = strArray.length - 1; idx > 0; idx--) {
      let element = strArray.splice(idx - 1, 1);
      strArray.push(element[0]);
   }

   return strArray.join("");
}
function reverseNumber(num) {
   if (!Number.isSafeInteger(num)) return 0;

   if (num < 10 && num > -10) return num;

   const MAX_DIGITS = 16; //Max safe integer has 16 digits
   const isPositive = num > 0;
   let digitCount = 0;
   let remainingDigits = (isPositive) ? num : -num;
   let rtnNum = 0;
   for (let i = 1; i <= MAX_DIGITS; i++) {
      let digit = Math.floor(remainingDigits / Math.pow(10, MAX_DIGITS - i));
      if (digit > 0) {
         remainingDigits %= Math.pow(10, MAX_DIGITS - i);
         rtnNum += digit * Math.pow(10, digitCount);
         digitCount++;
      }
   }

   return (isPositive) ? rtnNum : -rtnNum;
}

/**
 * toggleCase - toggles the case of a given character assuming UTF-8
 * (unicode) character table.
 * @param {string} char 
 */
function toggleCase(char) {
   const charCode = char.charCodeAt(0);
   const isUpperCase = charCode < 0x5b && charCode > 0x40;
   const isLowerCase = charCode < 0x7b && charCode > 0x60;
   const isLetter = isUpperCase || isLowerCase;
   let rtnChar;

   //return the character if it is NOT a letter
   if (!isLetter) return char;

   //Toggle case
   if (isLowerCase) {
      rtnChar = String.fromCharCode(charCode - 0x20);
   } else {
      rtnChar = String.fromCharCode(charCode + 0x20);
   }

   return rtnChar;
}

function reverseCase(str) {
   let rtnString = "";

   Array.from(str).forEach((item, idx, arr) => {
      rtnString += toggleCase(item);
   });

   return rtnString;
}

function commonElements (arr1, arr2) {
   let rtnArray = [];

   arr1.forEach(item => {
      if (arr2.includes(item)) {
         rtnArray.push(item);
      }
   });

   return rtnArray;
}

function toCamelCase(str) {
   const isSnakeCase = str.includes("_");
   const isKababCase = str.includes("-");
   const delimeter = (isKababCase)? "-" : "_";
   let rtnStr = "";

   if (!isSnakeCase && !isKababCase) return str;

   //* Use delimeer to build camelCase string *//
   str.split(delimeter).forEach((word, idx) => {
      let newWord = word;
      if (idx > 0) {
         newWord = newWord[0].toUpperCase() + newWord.slice(1);
      }

      rtnStr += newWord;
   });

   return rtnStr;
}

function sortString (str) {
   return Array.from(str).sort().join("");
}

const init = () => {
   document.querySelector("#runTest").addEventListener("click", event => {
      // console.log(longestString(["Hello", "World", "I'm", "here!!!!!"]));
      // console.log(reverseString("here!!!!!"));
      // console.log(reverseNumber(12345));
      // console.log(reverseCase("hello WORLD!"));
      // console.log(commonElements([1, 2, 3],[4, 5, 6]));
      // console.log(toCamelCase("the-stealth-warrior"));
      // console.log(toCamelCase("The_stealth_warrior"));
      // console.log(toCamelCase("thestealthwarrior"));
      console.log(sortString('dcba'));
      console.log(sortString('zycxbwa'));
      console.log(sortString('AzycxbCwBaA'));
      console.log("Hello You");
   });
}

window.addEventListener("load", init);