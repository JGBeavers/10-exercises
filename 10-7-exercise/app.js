// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

// What does the following code return?
[...new Set('referee')].join(''); // 'ref'

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//0: {Array(3) => true}
//1: {Array(3) => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
  if (new Set(arr).size < arr.length) {
    return true;
  }
  return false;
};

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (word) => {
  const vowels = 'aeiou';
  const wordMap = new Map();
  for (let i of word) {
    if (vowels.indexOf(i) !== -1) {
      if (wordMap[i] === undefined) {
        wordMap[i] = 1;
      } else {
        wordMap[i]++;
      }
    }
  }
  return wordMap;
};

// const vowelCount = (word) => {
//   const vowels = 'aeiou';
//   const wordMap = new Map();
//   for (let i of word) {
//     if (vowels.indexOf(i) !== -1) {
//       if (wordMap.has(i)) {
//         wordMap.set(i, wordMap.get(i) + 1);
//       } else {
//         wordMap.set(i, 1);
//       }
//     }
//   }
//   return wordMap;
// };
