// Task 1
var stringVar = "string";

// Task 2
var person = {
  age: 21
};

// Task 3
var outOfStock = false;

if (outOfStock === false) {
  console.log("Out of stock.");
} else {
  console.log("In stock");
}

// Task 4
var numbersArray = [1, 2, 3, 4, 5];
for (var i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// Task 5
for (var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

// Task 6
for (var counter = 15; counter <= 25; counter++) {
  if (counter === 20) {
    console.log(counter);
  }
}


// Task 7
var arrayOfTwoObjects = [
  // first item
  {
    stringValue: "Hello",
    numberValue: 80,
    booleanValue: true
  },
  // second item
  {
    stringValue: "Goodbye",
    numberValue: 120,
    booleanValue: false
  }
];

for (var i = 0; i < arrayOfTwoObjects.length; i++) {
  console.log(arrayOfTwoObjects[i].numberValue);
  console.log(arrayOfTwoObjects[i].booleanValue);
}

// Task 8
function whatIDontLike(iDontLikeThisSickness) {
  console.log("I don't like " + iDontLikeThisSickness);
}
whatIDontLike("cancer");

// Task 9
function task9WithTwoArguments(firstArgument, secondArgument) {
  var result = firstArgument - secondArgument;
  console.log(result);
}
task9WithTwoArguments();

// Task 10

var emtyArray = [];

function acceptOneArgument(animal) {
  emtyArray.push(animal);
}
acceptOneArgument("dog");
console.log(emtyArray);
