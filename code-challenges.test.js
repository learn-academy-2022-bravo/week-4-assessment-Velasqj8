// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleContent", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(shuffleContent(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleContent(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// FAIL  ./code-challenges.test.js
//  shuffleContent
//    ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
//
//  ● shuffleContent › takes in an array, removes the first item from the array and shuffles the remaining content
//
//    ReferenceError: shuffleContent is not defined

// Pseudocode
// Create a function called shuffleContent that takes in an array.
// Use a for loop to iterate each item in array.
// Use shift method to remove first item from arrays.
// Use Math.floor and Math.random to help shuffle the array
// Expected output: ["yellow", "blue", "pink", "green"]
// Expected output: ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const shuffleContent = (array) => {
  array.shift ()
  for (let i = 0; i < array.lenth; i++) {
    let shuffled = Math.floor(Math.random() * array.length)
    let newArray = array[i]
    array[i] = array[shuffled]
    array[shuffled] = newArray
  }
  return array
}

// PASS  ./code-challenges.test.js
//  shuffleContent
//    ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    expect(minMax(nums1)).toEqual(expect.arrayContaining([-8, 90]))
    expect(minMax(nums2)).toEqual(expect.arrayContaining([5, 109]))
  })
})

// FAIL  ./code-challenges.test.js
//  minMax
//    ✕ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)
//
//  ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
//
//    ReferenceError: minMax is not defined

// Pseudocode
// Create a function called minMax that takes in an array.
// Create variables with built in methods Math.min and Math.max.
// Use spred operator to iterate the values in the array
// Expected output: [-8, 90]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.

const minMax = (array) => {
  let min = Math.min(...array)
  let max = Math.max(...array)
  let result = ([min, max])
  return result
 }

 // PASS  ./code-challenges.test.js
 //  minMax
 //    ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("twoArrays", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    expect(twoArrays(testArray1, testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]))
  })
})

// FAIL  ./code-challenges.test.js
//  twoArrays
//    ✕ takes in two arrays as arguments and returns one array with no duplicate values
//
//  ● twoArrays › takes in two arrays as arguments and returns one array with no duplicate values
//
//    ReferenceError: twoArrays is not defined

// Pseudocode
// Create a function called twoArrays that takes in an array.
// Use new Set to make a new collection of values.
// Use spred operator to iterate the values in the array
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.

const twoArrays = (array1, array2) => {
  return [...new Set([...array1, ...array2])]
}

// PASS  ./code-challenges.test.js
//  twoArrays
//    ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)
