// //Friday ES6 in class coding assignment.  Please copy and paste your code into the text-box.
 

// //1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//     return num1 + num2;
// };



// //2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//    return money + 100;
// };



// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4


const myFunction = (num1,num2) => num1 + num2;

const add100 = money => money + 100;

const countLetters = (p1,p2) => {
    var thisList = []
    for (i = 0; i >= p1.length; i++)
{   if (p1.includes(p2))
    {p2.push(thisList)
    }
}
return console.log(thisList.length)
}

countLetters('Hello my name is John', 'i')


// function countOccurences(p1, p2) {
//     return p1.split(p2).length - 1;
//  }







