



//Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//Write an if/else statement for the following requirements:
// let grade = 85
for (let grade = 10; grade <= 100; grade += 20){
    if (grade >=80) {
    console.log ("You get " + grade + ": You did a good job")
    } else if (grade >= 70){
    console.log ("You get " + grade + ": Keep trying")
    } else if (grade >= 60){
    console.log ("You get " + grade + ": Eeehhhh")
    } else if (grade >= 55) {
    console.log ("You get " + grade + ": Not too good")
    } else{
    console.log ("You get " + grade + ": Bad grade. But you'll get em next time")
    }
}

//Multiple of 3 & 5
for (let num = 1; num <= 100; num++){
    if (num % 3 === 0) {
        console.log ("Fizz")
    } if (num % 5 === 0){
        console.log ("Buzz")
    } if (num % 3 === 0 && num % 5 === 0) {
        console.log ("FizzBuzz")
    }
}