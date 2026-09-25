import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
    let year = prompt("Enter a year (* to end): ");

    if (year === "*") {
        break;
    }

    year = Number(year);

    if (Number.isNaN(year) || year < 1 || year > 9999) {
        console.log("Invalid year!");
        continue;
    }

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("Yes, " + year + " is a leap year.");
    } else {
        console.log("No, " + year + " is not a leap year.");
    }
}
