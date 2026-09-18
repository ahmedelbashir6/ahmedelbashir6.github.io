let results = [];

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while(true) {
    let xInput = prompt("Enter the first number (x):");
    if (xInput === null) break;

    let yInput = prompt("Enter the second number (y):");
    if (yInput === null) break;

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    let x = Number(xInput);
    let y = Number(yInput);
    let validOperators = ["+", "-", "*", "/", "%"];
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: invalid number";
    } else if (!validOperators.includes(operator)) {
        result = "Error: invalid operator";
    } else {
        if (operator === "+") {
            result = x + y;
        } else if (operator === "-") {
            result = x - y;
        } else if (operator === "*") {
            result = x * y;   
        } else if (operator === "/") {
            result = x / y;
        } else if (operator === "%") {
            result = x % y;
        }
    }

        document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");

        if (typeof result === "number") {
            results.push(result);
        }
          
} 
document.write("</table>");

    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((sum, val) => sum + val, 0);
        let avg = total / results.length;

        document.write("<table>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
        document.write("</table>");
    }