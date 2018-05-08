/**
 * Write a function that splits the Fibonacci sequence into two arrays of even and odd numbers.
 * 
 * The Fibonacci number generator was created in week-09 and can be found here:
 * 
 * https://stackblitz.com/edit/js-liftoff-week-09-fibinacci-final-copy
 * 
 * The splitting function has also been developed in week-07
 * 
 */

let fibonacci = function (n) {

    let n1 = 0, n2 = 1, fib = 1;

    let fibList = [n1, n2];

    for (let i = 0; i < n - 2; i++) {

        fib = n1 + n2, n1 = n2, n2 = fib;

        fibList.push(fib);

    }

    return fibList;

}

// declaration of the fuction and the argument.
let numberSeparator = function (n) {
    //variable numSeparator is equal to fibonacci vaule
    let fibonacciArray = fibonacci(n);
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < n; i++) {

        if ((fibonacciArray[i] % 2) === 0) {
            evenArray.push(fibonacciArray[i]);
        }

        else if ((fibonacciArray[i] % 2) !== 0) {
            oddArray.push(fibonacciArray[i]);
        }

    }
    return [evenArray, oddArray];
};

// console.log(fibonacci(20));

let result = numberSeparator(20);

console.log(

    result[0],
    result[1]

);

