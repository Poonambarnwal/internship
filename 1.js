//Write a function printNumbers that prints numbers from 1 to 10 using a loop.
//Example: The function should print: 1 2 3 4 5 6 7 8 9 10.
console.log("For loop ==>>> \n")
for (let i = 0 ; i <= 10 ; i++ )
{
    console.log("Number",i)
}
//Write a function sumOfNaturalNumbers that takes a number n as input and returns the sum of the first n natural numbers.
//Example: sumOfNaturalNumbers(5) should return 15.
console.log("for ==>>> \n")
let sum =0
for (let i= 1; i<=5; i++)
{
    sum = sum + i
}
console.log("sum of first natural number is" + sum)
//Write a function factorial that takes a number as input and returns the factorial of that number using a loop.
//Example: factorial(5) should return 120.
let factorial =1
for (let i= 1; i<=5; i++)
{
    factorial = factorial * i
}
console.log("return number is" ,factorial)


//Write a function printEvenNumbers that takes a number n as input and prints all even numbers from 1 to n.
//Example: printEvenNumbers(10) should print: 2 4 6 8 10.
function evenNumber(arr){

for(let i=0; i<=arr; i=i+2) {
    console.log(i);
}

}
evenNumber(10)

//Write a function reverseString that takes a string as input and returns the reversed string using a loop.
//Example: reverseString("hello") should return "olleh".



//Write a function printArrayElements that takes an array as input and prints each element of the array.
//Example: printArrayElements([1, 2, 3, 4, 5]) should print: 1 2 3 4 5.
let num = [1, 2, 3, 4, 5];

for (let number of num ){
    console.log(number)
}
//Write a function findLargestNumber that takes an array of numbers as input and returns the largest number in the array using a loop.
//Example: findLargestNumber([1, 2, 3, 4, 5]) should return 5.
function largestNumber(arr){
let largestnum= arr[0]
    for(let i=1; i<arr.length; i++) {
        if(largestnum<arr[i]){
            largestnum=arr[i]
        }
           
    }
    return largestnum;
    }
    console.log(largestNumber([1,2,3,4,8,7,6,9,11,15,20]));


//Write a function countVowels that takes a string as input and returns the number of vowels in the string using a loop.
//Example: countVowels("hello") should return 2.
const countVowel = (str)=>{
   let vowels="aeuio"
   for(i=0; i<str.length; i++){
    if(str.length<)
   } 

    
}

//Write a function fibonacci that takes a number n as input and prints the first n terms of the Fibonacci sequence.
//Example: fibonacci(5) should print: 0 1 1 2 3.


//Write a function isPrime that takes a number as input and returns true if the number is a prime number, and false otherwise.
//Example: isPrime(7) should return true.


//Write a function removeDuplicates that takes an array as input and returns a new array with duplicate elements removed using a loop.
//Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5].


//Write a function transposeMatrix that takes a 2D array (matrix) as input and returns the transposed matrix using nested loops.
//Example: transposeMatrix([[1, 2], [3, 4]]) should return [[1, 3], [2, 4]].


//Write a function countOccurrences that takes an array as input and returns an object with the count of each element in the array.
//Example: countOccurrences([1, 2, 2, 3, 3, 3]) should return {1: 1, 2: 2, 3: 3}.


//Write a function multiplicationTable that takes a number n as input and prints the multiplication table for numbers from 1 to n.
//Example: multiplicationTable(3) should print:

//1 x 1 = 1
//1 x 2 = 2
//1 x 3 = 3
//2 x 1 = 2
//2 x 2 = 4
//2 x 3 = 6
//3 x 1 = 3
//3 x 2 = 6
//3 x 3 = 9
//Find Second Largest Number in an Array:


//Write a function secondLargest that takes an array of numbers as input and returns the second largest number in the array using a loop.
//Example: secondLargest([1, 2, 3, 4, 5]) should return 4.


//Write a function sumOfDigits that takes a number as input and returns the sum of its digits using a loop.
//Example: sumOfDigits(1234) should return 10.


//Write a function printPattern that takes a number n as input and prints a pattern of stars in n rows, where the first row has one star, the second row has two stars, and so on.
//Example: printPattern(3) should print:
//markdown
//*
//**
//***
//Find Common Elements in Two Arrays:


//Write a function findCommonElements that takes two arrays as input and returns a new array with the common elements using nested loops.
//Example: findCommonElements([1, 2, 3], [2, 3, 4]) should return [2, 3].


//Write a function isPalindromeNumber that takes a number as input and returns true if the number is a palindrome (reads the same forward and backward), and false otherwise.
//Example: isPalindromeNumber(121) should return true.


//Write a function findGCD that takes two numbers as input and returns their greatest common divisor (GCD) using a loop.
//Example: findGCD(48, 18) should return 6.