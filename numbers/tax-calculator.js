var cost = prompt("Enter the cost of the item:"),
    rate = prompt("Enter the tax rate of your area (e.g. 4.4):"),
    answer = "",
    tax = total = 0;

tax = cost * (rate / 100);
total = Number(cost) + tax;
answer = "Tax: " + tax.toFixed(2) + "\nTotal: " + total.toFixed(2);
console.log(answer);
alert(answer);