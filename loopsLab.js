
//////////// ARRAYS ////////////

// 1. Array operations

// Let’s try 5 array operations.

// 1. Create an array styles with items “Jazz” and “Blues”.
// 2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// 4. Strip off the first value of the array and show it.
// 5. Prepend "Rap" and "Reggae" to the array.

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
let stylesLength = styles.length;
console.log(arrayMiddle)

function arrayMiddle(arrayLength) {
    if (arrayLength % 2 === 0) {
        let arrayMiddle = ((arrayLength / 2) - 1);
        return arrayMiddle;
    } else {
        let arrayMiddle = ((arrayLength / 2) - .5);
        return arrayMiddle;
    }
}

let stylesMiddle = arrayMiddle(stylesLength);
styles[stylesMiddle] = 'Classics';
let firstValue = styles.shift()
console.log(firstValue)
styles.unshift('Rap', 'Reggae');
console.log(styles)

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll


// 2. Reverse input numbers

// Write the function reverseInput() that:

// * Asks the user for numeric values using prompt.
// * Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// * Returns an array of the input numbers in reverse order.

// P.S. Zero is a valid number, please don’t stop the input on zero.

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

numberNomNom()

function numberNomNom() {
    let userInput = prompt('Please feed me numbers!');
    let inputArray = [];
    for (; 1 == 1;) {
        if (isNaN(userInput) === false) {
            inputArray.push(userInput);
            userInput = prompt('Please feed me more numbers! Nom Nom Nom');
        } else {
            alert('NOOOOOOO!!!! Only numbers!!!!!');
            break;
        }
    }
    alert(inputArray);
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 3. Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like
// “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Hint: use split to split the string into an array, transform it and join back

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

alert(camelize("background-color"))
alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))


function camelize(str) {
    let strArray = [];
    let convArray = [];
    let strLength = str.length;

    for (let i = 0; strLength > 0; i++ , strLength--) {
        strArray.push(str.charAt(i))
    }
    let strChar;
    for (; strArray.length > 0;) {
        if (strArray[0] === '-') {
            strArray.splice(0, 1)
            strChar = strArray.splice(0, 1)
            strChar = strChar.join()
            strChar = strChar.toUpperCase();
            convArray.push(strChar);

        } else {
            strChar = strArray.splice(0, 1);
            convArray.push(strChar);
        }

    }
    let convStr = convArray.join([''])
    return convStr;
}


////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 4. Angie's Colors

// CREATING AN ARRAY
// Create an empty array named Colors

// Add three colors to (the end of) the array

// Add another color to the front of the array

// Add one more color to the front of the array

// PRINTING ITEMS
// Print the length of the array

// Print the item at index 1. What do you expect to print? What printed?


// Remember arrays are 0 indexed. Meaning the first item in the array is at index 0
// Print the item at index 0

// Print the last color in your array


// Now try printing the last color in your array using colors.length-1
// Passing in [colors.length -1] as the index is useful when we do not know the length of the array
// This will always be the last item


// OVERRIDING ITEMS
// Replace the color at index 0 with a new color and print the new color


// Replace the color at index 2 with a new color and print the new color


// Replace the last color in your array with a new color and print it to the console
// Now try doing it again but this time use colors.length-1

// REMOVING ITEMS
// Print the array length to console
// Delete the color at the last index of your array


// Re-print the array length to console


// Print the color at index 0 to console


// Delete the color at the first index of your array


// Re-print the color at index 0


// Delete the color at index 2


// Delete the color at index 1 and store it in a variable called 'storedColor'


// Print 'storedColor' in to the console

// Print the length of our colors array

// Print the last item in our colors array
////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let Colors = [];
Colors.push('blue', 'green', 'yellow');
Colors.unshift('red');
Colors.unshift('teal');
console.log(`length is ${Colors.length}`);
console.log(`second item is ${Colors[1]}`);
console.log(`first item is ${Colors[0]}`);
let ColorsLength = Colors.length;
ColorsLength--;
console.log(`last item is${Colors[ColorsLength]}`);
console.log(`last item is ${Colors.length -1}`);
Colors[0] = 'azule'
console.log(`first item is ${Colors[0]}`);
Colors[2] = 'rojo'
console.log(`third item is ${Colors[2]}`);
ColorsLength = Colors.length;
ColorsLength--;
Colors[Colors.length -1] = 'amarillo';
console.log(`last item is${Colors[ColorsLength]}`);
console.log(`last item is ${Colors.length -1}`);
console.log(`Colors Array is ${Colors.length} in length`);
Colors.splice(Colors.length -1, 1);
console.log(`Colors Array is ${Colors.length} in length`);
console.log(`first item is ${Colors[0]}`);
Colors.splice(0, 1);
console.log(`first item is ${Colors[0]}`);
Colors.splice(0, 1);
let storedColor = Colors.splice(0, 1);
console.log(`Stored Color is ${storedColor}`)
console.log(`Colors Array is ${Colors.length} in length`);
console.log(`last item is ${Colors.length -1}`);
alert(Colors)

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////


// 5. Sabbatical

// Learning to code around your full time job is taking over your life. You
// realise that in order to make significant steps quickly, it would help to go
// to a coding bootcamp.

// You decide that rather than leaving work totally, you will request a
// sabbatical so that you can go back to work post-bootcamp and be paid while
// you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// * val = your value to the organisation
// * happ = her happiness level at the time of asking
// * The number of letters from 'sabbatical' that are present in string 'x'.

// Note that if x contains three instances of the letter 'l', that still scores
// three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return
// 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

// sabb('Can I have a sabbatical?', 5, 5) = 'Sabbatical! Boom!'
// sabb('Why are you shouting?', 7, 2) = 'Back to your desk, boy.'
// sabb('What do you mean I cant learn to code??', 8, 9) = 'Sabbatical! Boom!'
// sabb('Please calm down', 9, 1) = 'Back to your desk, boy.'

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let Request = ['Please calm down', 5, 5];
let Sabb = Request[0];
let SabbMatch = 0;
let Val = Request[1];
let Happ = Request[2];
let SabbLength = Sabb.length;
let Sabbatical = 'sabbatical';
let SabbaticalLength = Sabbatical.length;
for (let i = 0; i < Sabb.length; i++) {
    console.log(`i=${i}`);
    for (let x = 0; x < Sabb.length; x++) {
        console.log(`x=${x}`);
        if (Sabbatical.charAt(x) == Sabb.charAt(i)) {
            SabbMatch++
        }
    }
}
console.log(SabbMatch)
if ((SabbMatch + Val + Happ) > 22) {
    console.log('Sabbatical! Boom!');
} else {
    console.log('Back to your desk, boy.');
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

//////////// LOOPS ////////////
console.log("Loops and Loops and Loops and Loops and Loops and well you get the idea...");

// 1. Repeat until the input is a number

// Create a function readNumber that prompts for a number until the user
// enters a valid numeric value.

// The resulting value must be returned as a number.

// The user can also stop the process by entering an empty line or pressing the
// Cancel button. In that case, the function should return null.

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

console.log(readNumber(1))

function readNumber() {
    let test = false;
    for (; test === false;) {
        let input = prompt('Give me a Number!');
        if (isNaN(input) == false) {
            test = true;
            return parseInt(input);
        }

    }
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////



// 2. Buzz-feed

// Print out the numbers 1-100 in your console.
// If the number is perfectly divisible by 3 then print "Fizz" instead
// If the number is perfectly divisible by 5 then print "Buzz" instead
// If the number is perfectly divisible by both 3 and 5 then print "Fizz-Buzz" instead

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("Fizz-Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////


// 3. Poker Face

// Create a variable called "deck" and set it equal to an empty array.

// Write 4 separate for loops to create the different suits of cards and push them into the deck.


// Print your deck to the console to make sure it's working.
// Write a new loop that is designed to grab 2 cards at random and swap them so we can shuffle our deck.



// Print the results of 1 shuffle to ensure it works.
// Now run that loop 10,000 times and reprint the shuffled deck.
// Print the position of the Ace of Spades to the page.

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let deck = [];
let suitArray = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
let card;
for (; suitArray.length > 0;) {
    let suit = suitArray.splice(0, 1);
    for (i = 1; i <= 14; i++) {
        if (i <= 10) {
            card = `${i} of ${suit}`;
            deck.push(card);
        } else if (i === 11) {
            card = `J of ${suit}`;
            deck.push(card);
        } else if (i === 12) {
            card = `Q of ${suit}`;
            deck.push(card);
        } else if (i === 13) {
            card = `K of ${suit}`;
            deck.push(card);
        } else if (i === 14) {
            card = `A of ${suit}`;
            deck.push(card);
        }
    }
}
console.log(deck)
for (i=1; i <= 10000; i++) {
    let position1  = Math.floor(Math.random() * 55);
    let position2 = Math.floor(Math.random() * 55);
    let card1 = deck[position1];
    deck[position1] = deck[position2];
    deck[position2] = card1;
}
console.log(deck)
console.log(deck.indexOf( 'A of Spades'))

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////

// 4. A maximal subarray

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (sum of 2 + 3)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6 (sum of 2 + -1 + 2 + 3)
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3  (sum of 2 + 1)
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (take all)

// If all items are negative, it means that we take none (the subarray is
// empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

// Wasted about 2 hours troubleshooting this code before I realized you cant make a copy of an array by initializing it to a new variable.
// for some reason the copy array takes all the methods of the original. Seems dumb.....

let totalArray = [-2, -1, 1, 2];
let totalArrayLength = totalArray.length;
let originalLength = totalArrayLength;
let sumArray = []
let subArray = []
let totalArrayCopy = arrayCopy(totalArray)

function arrayCopy(array) {
    let arrayCopy = [];
    for (i = 0; array.length > i; i++) {
        arrayCopy.push(array[i]);
    }
    return arrayCopy;
}

function myReduce(array) {
    let total = 0;
    for (i = 0; array.length > i; i++) {
        total += array[i];
    }
    return total;
}

for (x = originalLength - 1; x >= 0; x--) {
    for (i = 0; totalArrayLength > i; i++) {
        subArray.push(totalArray[i]);
        if (i == totalArrayLength - 1) {
            sumArray.push(myReduce(subArray));
            subArray = [];
            totalArray.splice(0, 1);
            totalArrayLength -= 1;
            i = -1;

        }

    }
    totalArrayCopy.splice(x);
    totalArray = arrayCopy(totalArrayCopy)
    totalArrayLength = originalLength - 1;
    originalLength--
    i = 0;
}
console.log(Math.max.apply(null, sumArray));

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////


// 5. Perfect Change
// Prompt the user for a dollar amount they would like perfect change for. (eg. 100 = $1)
// Write code that intakes the users money and prints to the console perfect change.
// Once the change has been printed in the console the code should stop running.

// Examples:
//    User inputs: 82
//    Console outputs:
//       quarter
//       quarter
//       quarter
//       nickel
//       penny
//       penny

////////////////////////////////////////////////MY ANSWER//////////////////////////////////////////////////

let input = prompt('Give me your money and I will give you perfect Change')
alert(perfectChange(input))
function perfectChange(num) {
    let money = num;
    let change = [];
    console.log(money)
    while (money > 0) {
        console.log('reset')
        if (money >= 50) {
            console.log('1 - 50');
            while (money >= 50) {
                change.push('$50');
                money -= 50;
                console.log(' 2 - 50');
            }
            console.log(`1total: ${money}`)
        } else if (money >= 20) {
            console.log('1 - 20');
            while (money >= 20) {
                change.push('$20');
                money -= 20;
                console.log('2 - 20');
            }
            console.log(`2total: ${money}`)
        } else if (money >= 10) {
            console.log('1 - 10');
            while (money >= 10) {
                change.push('$10');
                money -= 10;
                console.log('2 - 10');
            }
            console.log(`3total: ${money}`)
        } else if (money >= 5) {
            console.log('1 - 5');
            while (money >= 5) {
                change.push('$5');
                money -= 5;
                console.log('2 - 5');
            }
            console.log(`4total: ${money}`)
        } else if (money >= 1) {
            console.log('1 - 1');
            while (money >= 1) {
                change.push('$1');
                money -= 1;
                console.log('2 - 1');
            }
            console.log(`5total: ${money}`)
        } else if (money >= .25) {
            console.log('1 - .25');
            while (money >= .25) {
                change.push('quarter');
                money -= .25;
                console.log('2 - .25');
            }
            console.log(`6total: ${money}`)
        } else if (money >= .10) {
            console.log('1 - .10');
            while (money >= .10) {
                change.push('dime');
                money -= .10;
                console.log('2 - .10');
            }
            console.log(`7total: ${money}`)
        } else if (money >= .05) {
            console.log('1 - .05');
            while (money >= .05) {
                change.push('nickle');
                money -= .05;
                console.log('2 - .05');
            }
            console.log(`8total: ${money}`)
        } else if (money >= .01) {
            console.log('1 - .01');
            while (money >= .01) {
                change.push('penny');
                money -= .01;
                console.log('2 - .01');
            }
        }
        console.log('end');
    }
    return change;
}

////////////////////////////////////////////////END OF ANSWER//////////////////////////////////////////////
