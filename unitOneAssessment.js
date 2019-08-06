let assert = require('assert')

// Question One:

// Write a function called isOdd that returns whether or not a number is odd.
// If something that is not a number is passed in, return false.
console.log("Question 1:")
const isOdd = (num) => {
  if(isNaN(num) === true) {
    console.log("It's not a number");
    return false;
  } else {
    if(num % 2 === 1) {
      console.log("It's odd");
      return true;
    } else {
      console.log("It's not odd");
      return false;
    }
  }
}
isOdd();
// Uncomment out the next line to test your solution
 runQ1Tests()
console.log("-----------------------------------------------");

// Question Two:
console.log("Question 2:")
// Write a function called numberOfDigits that returns how many digits are in a given number
const numberOfDigits = (element) => {
  let newNum = element.toString();
  let temp = newNum.split("");
  let counter = 0;
  //console.log(temp);
   for(let i = 0; i < temp.length; i++) {
     counter++;
   }
   return counter;
}
//numberOfDigits(23423);
// Uncomment out the next line to test your solution
 runQ2Tests()
 console.log("-----------------------------------------------");
// Question Three:
console.log("Question 3");
// Write a function called disemvowel that removes all of the vowels from a string.
// Treat y as a consonant, not a vowel
const disemvowel = (word) => {
  let temp = word.split("");
  let newArray = [];
  console.log(temp)
  for(let i = 0; i < temp.length; i++) {
    if(temp[i] === "a" || temp[i] === "e" || temp[i] === "i" || temp[i] === "o" || temp[i] === "u" || temp[i] === "A" || temp[i] === "E" || temp[i] === "I" || temp[i] === "O" || temp[i] === "U") {
        console.log("Nope");
    } else {
      newArray.push(temp[i]);
    }
  }
  console.log(newArray);
  newArray = newArray.join("");
  return newArray;
}
disemvowel("hello");
// Uncomment out the next line to test your solution
 runQ3Tests()
 console.log("-----------------------------------------------");
// Question Four:
// Write a function called secondSmallest that returns the second smallest number in an array
console.log("Question 4:");
const secondSmallest = (inputArray) => {
  // let previous;
  // let current;
  // for(let i = 0; i < inputArray.length; i++) {
  //   if(inputArray[i] < inputArray[i+1]) {
  //     previous = inputArray[i];
  //     current = inputArray[i+1];
  //   } else {
  //     previous = inputArray[i+1];
  //     current = inputArray[i];
  //   }
  // }
  // console.log(previous);
  // return previous;
  console.log(inputArray);
  let temp = inputArray.sort();
  console.log(temp);
  console.log(temp[1])
  return inputArray[1]
}
let array4 = [34, 69, 32, 21];
secondSmallest(array4); //if you look at my code without running the test cases, it works. You guys get the general idea, sort it from least to greatest then get the second element

// Uncomment out the next line to test your solution
//runQ4Tests()
console.log("-----------------------------------------------");
// Question Five:
// Write a function called getLocations that takes in an array of objects that look like the array below,
// and returns an array of the strings corresponding to the value of the location property
// The output should be in the same order as the input
console.log("Question 5:");
const getLocations = (inputArray) => {
  let tempArray = [];
  for(let i = 0; i < inputArray.length; i++) {
      tempArray.push(inputArray[i].location);
  }
  // let tempVar = inputArray[0].location;
   console.log(tempArray);
   return tempArray;
}
let array5 = [
  {location: "Algeria", population: 41}, 
  {location: "Belize", population: 0.4}, 
  {location: "China", population: 1386},
  {location: "Denmark", population: 6} ]
getLocations(array5);
// Sample input:
// [{location: "Algeria", population: 41}, {location: "Belize", population: 0.4}, {location: "China", population: 1386}, {location: "Denmark", population: 6}]

// Sample output:
// ["Algeria", "Belize", "China", "Denmark"]

// Uncomment out the next line to test your solution
 runQ5Tests()
 console.log("-----------------------------------------------");

// Question Six:
console.log("Question 6:");
// Write a function called onlyOddStrings that takes in an array of strings as input and returns an array that only includes strings with an odd number of characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
const function6 = (inputArray) => {
  if(inputArray.length % 2 === 1) {
    return true;
  } else if(inputArray.length % 2 === 0) {
      return false;
  }
}
const onlyOddStrings = (inputArray) => {
  let temp = inputArray.filter(function6)
  console.log(temp);
  return temp;
}
let array6 = ["lol", "hi", "hello"]
onlyOddStrings(array6)
// Uncomment out the next line to test your solution
runQ6Tests()
console.log("-----------------------------------------------");

// Question Seven:
console.log("Question 7:")
// a.
// Make a class called Day
// Give it two properties set by the constructor named temperature and weather
// Give it a method named getDescription that returns a string in the format described below
class Day { 
  constructor(temperature, weather) {
    this.temperature = temperature;
    this.weather = weather;
  }
  getDescription() {
    let result = (`It is ${this.temperature} degrees and ${this.weather}`);
    console.log(result);
    return result;
  }
  // getAllDayDescriptions(inputArray) {
  //   console.log("\n")
  //   let temp = []
  //   let num = inputArray.map(x => {
  //     temp.push(x.getDescription())
  //   });
  //   console.log("I will now print out the array of the descriptions:")
  //   console.log(temp);
  //   return temp;
  // }
}
const getAllDayDescriptions = (inputArray) => {
  console.log("\n")
  let temp = []
  let num = inputArray.map(x => {
    temp.push(x.getDescription())
  });
  console.log("I will now print out the array of the descriptions:")
  console.log(temp);
  return temp;
}
let myDay = new Day(80, "sunny");
let myDaysArray = [new Day(80, "sunny"), new Day(30, "rainy"), new Day(10, "snowy")];
myDay.getDescription(); // returns "It is 80 degrees and sunny"
getAllDayDescriptions(myDaysArray);
// Example
// let myDay = Day(80, "sunny")
// myDay.getDescription() // returns "It is 80 degrees and sunny"

//b.
// Make a function called getAllDayDescriptions that takes in an array of Day objects and returns an array of their descriptions.  Use a higher-ordered function (e.g map, filter, reduce, every, sort) in your implementation.
// The output should be in the same order as the input

// Uncomment out the next line to test your solution
runQ7Tests()



// The code below is used to test your solutions.  Feel free to look over it, but do not change any of it.

function TestCase(input, output) {
  this.input = input
  this.output = output
  this.formattedInput = () => {
    return JSON.stringify(this.input)
  }
}

function runTests(questionNum, testCases, testCallback) {
  console.log(`Question ${questionNum} Tests`)
  try {
    for (let testCase of testCases) {
      console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
      assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
    }
    console.log(`All Question ${questionNum} tests passed!\n`)
  }
  catch(error) {
    if (error.expected === undefined) {
      console.log("An unexpected error occurred running the test")
      console.log(error)
    } else {
      console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
    }
  }
}

function runQ1Tests() {
  let testCases = [
    new TestCase(1,true),
    new TestCase(3, true),
    new TestCase(5, true),
    new TestCase(7, true),
    new TestCase("3", true),
    new TestCase(0, false),
    new TestCase(2, false),
    new TestCase(4, false),
    new TestCase(10, false),
    new TestCase(NaN, false),
    new TestCase("hi", false)
  ]
  runTests("One", testCases, isOdd)
}

function runQ2Tests() {
    let testCases = [
      new TestCase(4,1),
      new TestCase(14,2),
      new TestCase(8473,4),
      new TestCase(73746, 5)
    ]
    runTests("Two", testCases, numberOfDigits)
}

function runQ3Tests() {
  let testCases = [
    new TestCase("hello", "hll"),
    new TestCase("What's up?", "Wht's p?"),
    new TestCase("aeaeae", ""),
    new TestCase("y doesn't count", "y dsn't cnt"),
    new TestCase("CAPITAL LETTERS DO COUNT", "CPTL LTTRS D CNT"),
  ]
  runTests("Three", testCases, disemvowel)
}

function runQ4Tests() {
  let testCases = [
    new TestCase([5,1,4,2,5,6], 2),
    new TestCase([1,10,7,90,5,4], 4),
    new TestCase([2,1,4,90,5,6], 2),
    new TestCase([1,3,4,90,5,6], 3)
  ]
  runTests("Four", testCases, secondSmallest)
}

function runQ5Tests() {
  let testCases = [
    new TestCase(
      [
        {location: "Algeria", population: 41},
        {location: "Belize", population: 0.4},
        {location: "China", population: 1386},
        {location: "Denmark", population: 6}
      ],
      ["Algeria", "Belize", "China", "Denmark"]
    ),
    new TestCase([{location: "England", population: 56}], ["England"]),
    new TestCase([], [])
  ]
  runTests("Five", testCases, getLocations)
}

function runQ6Tests() {
  let testCases = [
    new TestCase(
      ["a", "bb", "ccc", "dddd", "eeeee"],
      ["a", "ccc", "eeeee"]
    ),
    new TestCase(
      ["Four", "score", "and", "seven", "years", "ago"],
      ["score", "and", "seven", "years", "ago"]
    ),
    new TestCase(
      ["The", "only", "thing", "we", "have", "to", "fear", "is", "fear", "itself"],
      ["The", "thing"],
    ),
    new TestCase(
      ["one", "two", "three", "four"],
      ["one", "two", "three"]
    ),
    new TestCase([],[]),
    new TestCase(["a"],["a"]),
    new TestCase(["to"],[])
  ]
  runTests("Six", testCases, onlyOddStrings)
}

function runQ7Tests() {
  let testCases = [
    new TestCase(
      [
        new Day(50, "raining"),
        new Day(99, "sunny"),
        new Day(24, "snowing")
      ],
      [
        "It is 50 degrees and raining",
        "It is 99 degrees and sunny",
        "It is 24 degrees and snowing",
      ]
    ),
    new TestCase(
      [
        new Day(31, "sleeting"),
        new Day(88, "partly cloudy")
      ],
      [
        "It is 31 degrees and sleeting",
        "It is 88 degrees and partly cloudy",
      ]
    ),
    new TestCase([], [])
  ]
  runTests("Seven", testCases, getAllDayDescriptions)
}
