

//STEP 1
function halfNumber(x) {
    "use strict";
        var result = x / 2;
        window.console.log("Half of " + String(x) + " is " + String(result) + ".");
        return result;
    }

halfNumber(5);
halfNumber(7.5);


//STEP 2
function squareNumber(x) {
    "use strict";
        var result = x * x;
        window.console.log("The result of squaring the number " + String(x) + " is " + String(result) + ".");
        return result;
}

squareNumber(2);
squareNumber(5);


//STEP 3
function percentOf(x, y) {
    "use strict";

        var result = Math.round(x / y * 100);
        window.console.log(String(x) + " is " + String(result) + "% of " + String(y) + ".");
        return result;
}

percentOf(2, 4);


//STEP 4
function findModulus(x, y) {
    "use strict";
        var result = x % y;
        window.console.log(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".");
        return result;
}
findModulus(4, 10);



//STEP 5
function sumNumbers(numberCollection) {
    "use strict";
    var sum = 0;
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }

    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));

}
var numberCollection = window.prompt("Enter numbers delimited by commas");
sumNumbers(numberCollection);

