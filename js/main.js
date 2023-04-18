console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

/*
Vinnie Chachra
200547583
*/

const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array
arr.push('Amrit','Francis','Gurleen','Sarah','Johanna','zury')
console.log(arr);


// Step 4: Remove the first array item from the array
arr.shift();
console.log(arr);


// Step 5 Remove the second array item from the array
arr.splice(1,1);
console.log(arr);


// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const newArr = arr.filter(item => !item.startsWith("J"));

console.log(newArr);



// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const callToActionButton = document.querySelector(".call-to-action-button");

callToActionButton.addEventListener("click", () => {
  alert("Call me now at 123-123-1234");
});