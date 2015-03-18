    (function () {
        "use strict";

        var fibNth = function (n) {
            var fib = [0],
                value,
                target = Math.abs(Number(n));

            if (!target) {
                console.log("Please enter a number.");
                return;
            }

            // make this DRY
            if (target === 0) {
                fib.push(target);
                console.log(fib);
                return;
            }

            if (target === 1) {
                fib = [0, target];
                console.log(fib);
                return;
            }

            fib = [0,1];
            // make DRY to here

            while (fib.length < target) {
                value = fib[fib.length - 2] + fib[fib.length - 1];
                fib.push(value);
                if (target === value) {
                    break;
                }
            }

            console.log(fib);
        },
        nth = prompt("Enter a value to search for or stop at in the Fibonacci sequence:");

        fibNth(nth);

    }());