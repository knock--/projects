(function () {
    "use strict";

    var str = prompt("Enter a string to check if it's a palindrome:"),
        len = str.length,
        firstHalf,
        secondHalf,
        secondHalfReversed = "",
        i;

    firstHalf = str.slice(0, Math.floor(len / 2));
    secondHalf = str.slice(Math.ceil(len / 2));

    for (i = 0; i < secondHalf.length; i++) {
        secondHalfReversed += secondHalf[secondHalf.length - 1 - i];
    }

    console.log(firstHalf === secondHalfReversed);

}());