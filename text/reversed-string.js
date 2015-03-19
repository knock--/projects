(function () {
    "use strict";

    var str = prompt("Enter a string to be reversed:"),
        reversedStr = "",
        len = str.length,
        i;

    for (i = 0; i < len; i++) {
        reversedStr += str[len - 1 - i];
    }

    console.log(reversedStr);
}());