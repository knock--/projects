    (function () {
        "use strict";

        var fibNth = function (n) {
            var fib = [0],
                value,
                target = Math.abs(Number(n));

            if (isNaN(target)) {
                console.log("Please enter a number.");
                return;
            }

            if (target === 0) {
                console.log(fib);
                return;
            }

            if (target === 1) {
                fib.push(target);
                console.log(fib);
                return;
            } else {
                fib.push(1);
                while (fib.length < target) {
                    value = fib[fib.length - 2] + fib[fib.length - 1];
                    fib.push(value);
                    if (target === value) {
                        break;
                    }
                }
            }

            console.log(fib);
        },
        nth = prompt("Enter a value to search for or stop at in the Fibonacci sequence:");

        fibNth(nth);

    }());