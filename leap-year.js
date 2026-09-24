import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
    let year = Number(prompt("Enter a year: "));

    while (Number.isNaN(year) || year < 1 || year > 9999) {
        console.log("Please enter a valid year.");
        year = Number(prompt("Enter a year: "));
    }

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
