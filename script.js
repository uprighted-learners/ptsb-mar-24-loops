/*
    Loops
*/

/*
    while loop - loops through a block of code as long
    as the specified condition is true
*/

let i = 0
while (i < 10) {
    console.log("i is", i);
    i = i + 1;
}
console.log("Continue on with the rest of our code...");

/*
    if the code block does NOT have something
    where the condition is eventually NO LONGER true
    then this will result in an INFINITE LOOP
*/
let x = 0;
while (x < 10) {
    console.log("x is ", x);
    //code is missing to update 'x'. This will result in an infinite loop
}

/*
    DO WHILE - a do while loop will execute the code block once
    before checking if the condition is true, then it will
    repeat as long as the condition is true
*/
let y = 0;
do {
    console.log("y is ", y);
    y = y + 1;
} while (y < 10)
console.log("Carry on with the rest of our code");


/*
    There are multiple ways to increase the value
    of your counter variable by one.
*/
let a = 0;
while (a < 10) {
    console.log("a is ", a);
    a++; // incrementing value by 1
    /*
        ^ This is the same as 'a = a + 1' or 'a += 1'
    */
}

/*
    Base 'for loop' structure
    for (initializer; condition; updater)
*/
for (let n = 0; n < 10; n++) {
    console.log("n is", n);
}

/*
    for loops work well with strings.
    We will see more examples of this in unit 3
*/
let fruit = "Blueberry";
/*

    B - 0
    l - 1
    u - 2
    e - 3
    b - 4
    e - 5
    r - 6
    r - 7
    y - 8

*/

/*
    We use the for loop to go through the letters of a string
    by using their indices. (index)
*/
for (let i = 0; i < 9; i++) {
    console.log("letter is", fruit[i])
}

/*
    for loop variant: for in
    With strings, this helps us get the index of each character.
    'for in' loops will become more practical when we get to objects
*/
for (let idx in fruit) { //idx is the index. NOTE: this does NOT have to be called idx. You can name this anything
    console.log("letter is ", fruit[idx]);
}
/*
    for loop variant: for of
    With strings, this helps us to get each character directly.
*/
for (let letter of fruit) {
    console.log(letter);
}

/*
    Multiple ways to increment a value by 1 for a 'for loop'
*/
count = count + 1
count += 1
count++


/*
    *** EXTRA ***

    The 'continue' statement terminates execution of the statements in the current
    iteration of the current loop, and continues execution of the loop
    with the next iteration
\*/
for (let i = 0; i < 10; i++) {

    if (i == 6) {
        console.log("It's six")
        continue;
    }

    console.log(i);
}

/*
    *** EXTRA ***

    The 'break' statement terminates the current loop
    and continues on with the rest of the code that follows
*/
for (let i = 0; i < 10; i++) {

    if (i == 6) {
        console.log("It's six")
        break;
    }

    console.log(i);
}

/*
    % - modulo
    Modulo - this will give the remainder of each division problem.

   Use case: Determining numbers to be odd or even.

   num % 2 === 0 (Even - if a number is smoothly divisible by 2, then it is an even number
   num % 2 === 1 (Odd - if a number IS NOT divisible by 2 (has a remainder), then it is an odd number)
*/

/*
    FizzBuzz
    Write a program that goes from 1 to 100
    But for multiples of three print “Fizz” instead of the 
    number and for the multiples of five print “Buzz”. 
    For numbers which are multiples of both three and five 
    print “FizzBuzz”.
*/

for (let i = 0; i <= 100; i++) {
    //Check if 'i' is divisible by 3 AND 5
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz"); //Print 'FizzBuzz'
    }
    //Check if 'i' is divisible by 5 
    else if (i % 5 === 0) {
        console.log("Buzz"); //Print 'Buzz'
    }
    //Check if 'i' is divisible by 3 
    else if (i % 3 === 0) {
        console.log("Fizz"); //Print 'Fizz'
    }
    //Print 'i' 
    else {
        console.log(i);
    }
}