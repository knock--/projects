// Anonymous self-invoking function to prevent polluting the global namespace
(function () {
    "use strict";

    var cc = prompt("Enter credit card number to be validated:"),
        checkDigit = Number(cc[cc.length - 1]),
        // Luhn Algorithm
        //
        // For each digit passed to the function, double the value of every 
        // other digit. If that value is greater than 9, add each digit 
        // together. Add non-doubled values together, including the 
        // 16th digit (the check digit) to the running total. If the sum of 
        // these values, is evenly divisible by 10, the card may be valid.
        genChecksum = function (num) {
            var tot = i = n = 0;

            for (i; i < num.length; i++) {

                if (i % 2 === 0) {
                    n = num[num.length - 1 - i] * 2;
                } else {
                    n = num[num.length - 1 -i];
                }
                
                if (n < 10) {
                    tot += Number(n);
                } else {
                    tot += Number(String(n)[0]) + Number(String(n)[1]);
                }
            }
            tot += checkDigit;
            return tot % 10 === 0;
        };

    console.log(genChecksum(cc.slice(0, cc.length - 1)));
}());