/*
Good morning! Write a function that, given two objects, returns whether or not 
the two are deeply equivalent - meaning the contents of the two objects are 
equal for all keys and sub-keys.
*/
function deepEquals(obj1, obj2) {
   const obj1Keys = Object.keys(obj1);
   const obj2Keys = Object.keys(obj2);
   
   //check for same keys
   if (obj1Keys.length !== obj2Keys.length) return false;
   
   //check if all keys are the same
   for (key of obj1Keys) {
      if (!obj2Keys.includes(key)) {
         return false;
      }
   }

   //check each key for equality
   for (key of obj1Keys) {
      //--- check key types ---//
      if (typeof obj1[key] === "object") {
         //--- objects use deepEquals for comparison ---//
         if (!deepEquals(obj1[key], obj2[key])) return false;
      } else {
         if (obj1[key] !== obj2[key]) return false;
      }
   }

   return true;
}

const johnA = {
   name: 'John',
   address: {
      line1: '321 Anytown',
      line2: 'Stoke-on-Trent'
   }
};

const johnB = {
   name: 'John',
   address: {
      line1: '321 Anytown',
      line2: 'Stoke-on-Trent'
   }
};

const johnC = {
   name: 'John Charles',
   address: {
      line1: '321 Anytown',
      line2: 'Stoke-on-Trent'
   }
};

const johnD = {
   name: 'John Charles',
   testArray: [1,4,5,7],
   address: {
      line1: '321 Anytown',
      line2: 'Stoke-on-Trent'
   }
};

const johnE = {
   name: 'John Charles',
   testArray: [1,4,5,7],
   address: {
      line1: '321 Anytown',
      line2: 'Stoke-on-Trent'
   }
};

console.log(deepEquals(johnA, johnB)); // true
console.log(deepEquals(johnA, johnC)); // false
console.log(deepEquals(johnD, johnE)); // true