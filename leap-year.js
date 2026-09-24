import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
    let year = prompt("Enter a year: ");
    let year = Number(year);

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

