(function () {
    "use strict";

    var num = prompt("Enter a number to be converted to decimal or binary:"),
        convertFromBinary = true,
        conversion = i = 0,
        base = 2,
        convertNumeral = function () {
            return num[num.length - i - 1] * Math.pow(base, i);
        };

    if (!/^\d+$/.test(num)) {
        console.log("Please enter a binary or decimal number.");
        return;
    }

    if (/[2-9]/.test(num)) {
        convertFromBinary = false;
        base = 10;
    }

    if (convertFromBinary) {
        for (i = 0; i < num.length; i++) {
            conversion += convertNumeral();
        }
    } else {
        for (i = 0; i < num.length; i++) {
            conversion += convertNumeral();
        }

    }

    console.log(conversion);
}());