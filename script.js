let dayTime = document.getElementById("dayTime");
let date = new Date();

function createDayTime() {
    let dayTimePara = document.createElement("p");
    dayTime.appendChild(dayTimePara);

    let now = new Date();
    let day = now.getDay();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    dayTimePara.innerHTML = `Today is day ${day} of the week and it is currently ${hour}:${minutes} o'clock.`;
}

createDayTime();

//================================================================================================

let printBtn = document.getElementById("printCurrent");

printBtn.addEventListener("click", function () {
    window.print();
})

//================================================================================================
let currentDateDiv = document.getElementById("currentDate");

function currentDateCalc() {
    let currentDatePara = document.createElement("p");
    let currentDate = new Date(date.toDateString());
    currentDateDiv.appendChild(currentDatePara);

    currentDatePara.innerHTML = `Today is: ${currentDate.toDateString()}.`
}

currentDateCalc();

//================================================================================================

let triangleHeader = document.getElementById("triangle");

function calcTriangle(a, b, c) {
    let perimeter = (a + b + c) / 2;
    let area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));

    let trianglePara = document.createElement("P");
    triangleHeader.appendChild(trianglePara);
    trianglePara.innerText = `The Area of this triangle is: ${area.toFixed(2)}.`
    return area;
}

console.log(calcTriangle(5, 6, 7));

//================================================================================================

function rotateString() {
    let sampleText = document.getElementById("target");
    let textNode = sampleText.childNodes[0];
    let textData = textNode.data;

    setInterval(function () {
        textData = textData[textData.length - 1] + textData.substring(0, textData.length - 1);
        textNode.data = textData;
    }, 100);
}

rotateString();

//================================================================================================

function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function leapYear2(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    }
    return false;
}

let leapYearArrow = (year) => {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    }
    return false;
}


console.log(leapYear(2024));
console.log(leapYear2(2023));

//================================================================================================

// Modified to not only check between 2014 and 2050, but take any 2 years as parameters
function isSunday(year1, year2) {
    let container = document.getElementById("sundayCheck");
    let checkResult = document.createElement("p");
    container.appendChild(checkResult);

    for (let year = year1; year <= year2; year++) {
        let d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            checkResult.innerHTML += `The 1st of January is a Sunday in ${year}!<br>`
        }
    }
}

isSunday(2024, 2050);

//================================================================================================

function guessNumber() {
    let userInput = prompt(`Pick a number from one to ten!`);
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let container = document.getElementById("guessNumber");

    if (Number(userInput) === randomNumber) {
        let guess = document.createElement("p");
        container.appendChild(guess);
        console.log(randomNumber);
        guess.innerHTML = `Your guess is correct!`
    } else {
        let guess = document.createElement("p");
        container.appendChild(guess);
        console.log(randomNumber);
        guess.innerHTML = `Your guess is incorrect! Try again.`
    }
}

// guessNumber(); - Calling the function results in a user prompt, so we comment it out.

//================================================================================================

function daysUntilChristmas() {
    let oneDay = 1000 * 60 * 60 * 24;
    let today = new Date();

    let christmasDay = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() == 11 && today.getDate() > 25) {
        today.setFullYear(christmasDay.getFullYear() + 1)
    }

    let result = Math.round((christmasDay.getTime() - today.getTime()) / oneDay);

    let finalResult = result.toFixed(0);

    let container = document.getElementById("untilChristmas");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = `Number of days remaining until Christmas: ${today.toDateString()} and ${christmasDay.toDateString()} is: ${finalResult} days.`;

    // console.log(`Number of days remaining until Christmas: ${today.toDateString()} and ${christmasDay.toDateString()} is: ${finalResult} days.`); 
}

daysUntilChristmas();

//================================================================================================

