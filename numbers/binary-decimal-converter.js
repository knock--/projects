(function () {
    "use strict";

    var type = prompt("Convert to binary or decimal? (b or d)"),
        num = prompt("Enter a number to be converted to decimal or binary:"),
        conversion = i = 0,
        base = type.toLowerCase() === "d" ? 2 : 10;

    if (!/^\d+$/.test(num)) {
        console.log("Please enter a binary or decimal number.");
        return;
    }

    if (base === 2) {
        for (i = 0; i < num.length; i++) {
            conversion += num[num.length - i - 1] * Math.pow(base, i);
        }
    } else {
        conversion = [];
        while (num > 1) {
            conversion.push(Math.floor(num) % 2);
            num /= 2;
        }
        conversion = conversion.reverse().join("");
    }

    console.log(conversion);
}());