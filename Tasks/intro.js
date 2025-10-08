function task1_1() {
    let gb = prompt("Enter the capacity of flash drive (GB): ");
    let res = Math.floor((gb * 8000) / 820);
    alert(`The amount of data that can be stored on your flash drive ${res} (1 file = 820 Mb)`);
}

function task1_2() {
    let number = parseInt(prompt("Enter 3-digit number:"));

    if (number >= 100 && number <= 999) {
        let hundreds = Math.floor(number / 100);
        let remainder = number % 100;
        let tens = Math.floor(remainder / 10);
        let units = remainder % 10;

        let reversedNumber = units * 100 + tens * 10 + hundreds;

        alert(`Source: ${number}, Reversed: ${reversedNumber}`);
    }
    else alert("Please, enter 3-digit number!");
}

function task1_3() {
    let wholeNum = prompt("Enter the whole number:  ");
    let isWhole = wholeNum % 1 === 0;
    let isEven = wholeNum % 2 === 0;
    if (!isWhole) {
        alert("Number is not whole!");
    }
    else alert("The parity of your number: " + isEven);
}


function task2_1() {
    let age = prompt("Enter the age: ");
    if (age => 0 && age <= 12) {
        alert("You are: child");
    }
    else if (age > 12 && age <= 18) {
        alert("You are: teenager");
    }
    else if (age >= 18 && age <= 60) {
        alert("You are: adult");
    }
    else if (age >= 60 && age <= 109) {
        alert("You are: pensioner")
    }
    else if (age >= 110) {
        alert("Are you sure in being human?");
    }
    else alert("Invalid age, please try again.");
}

function task2_2() {
    let symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
    let num = prompt("Enter the number (0-9): ");
    if (num >= 0 && num <= 9) {
        alert(`Your special symbol: ${symbols[num]}`);
    }
    else alert("Invalid number, please try again.");
}

function task2_3() {
    let year = prompt("Enter the year: ");
    let isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    alert(`Is your year considered as leap: ${isLeap}`);
}


function task3_1() {
    let positiveCount = 0, negativeCount = 0, zeroCount = 0, evenCount = 0, oddCount  = 0;

    const MAX_NUM_COUNT = 10;
    let nums = prompt("Enter numbers (up to 10 times): ").trim().split(/\s+/).map(Number);
    if (nums.length > MAX_NUM_COUNT) alert(`Please, enter the right amount of numbers\nMax num amount is: ${MAX_NUM_COUNT}`);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) ++positiveCount;
        else if (nums[i] < 0) ++negativeCount;
        else ++zeroCount;

        if (nums[i] % 2 === 0) ++evenCount;
        else if (nums[i] % 2 !== 0) ++oddCount;
    }

    alert(
        `Positive numbers: ${positiveCount}\n
         Negative numbers: ${negativeCount}\n
         Zero numbers: ${zeroCount}\n
         Even count: ${evenCount}\n
         Odd count: ${oddCount}`
    );
}

function task3_2() {
    let isFinish = false;
    while (!isFinish) {
        let a = parseFloat(prompt("Enter the first number: "));
        let b = parseFloat(prompt("Enter the second number: "));
        let op = prompt("Enter the sign operation (+, -, *, /): ");

        switch (op) {
            case '+':
                alert(a + b);
                break;
            case '-':
                alert(a - b);
                break;
            case '*':
                alert(a * b);
                break;
            case '/':
                if (b === 0) {
                    alert("Error: Division by zero!");
                } else {
                    alert(a / b);
                }
                break;
            default:
                alert("Undefined operation detected, please try again.");
                break;
        }

        let repeat = prompt("Do you wish to continue? (Any key/n)");
        if (repeat === 'n') isFinish = true;
    }
}


function get_num_difference(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
}

function get_factorial(n) {
    if (n === 0 || n === 1) return 1;
    return get_factorial(n - 1) * n;
}

function get_seconds(hrs, mins, secs = 0) {
    if (hrs <= 0) return (mins * 60) + secs;
    else if (mins <= 0) return (hrs * 3600) + secs;
    return (hrs * 3600) + (mins * 60) + secs;
}

function get_elapsed_seconds(secs) {
    let hrs = (secs / 3600).toFixed();
    let mins = ((secs / 60) % 60).toFixed();
    let actualSecs = secs % 60;
    return `${hrs}:${mins}:${actualSecs}`;
}

function sum(...nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res += nums[i];
    }
    return res;
}

!function main() {
    task1_1();
    //task1_2();
    //task1_3();

    //task2_1();
    //task2_2();

    //task3_1();
    //task3_2();

    //alert(get_num_difference(1, 1));
    //alert(get_factorial(5));
    //alert(get_seconds(1, 12, 0));
    //alert(get_elapsed_seconds(3693));
    //alert(sum(1, 2, 3, 4));
}()
