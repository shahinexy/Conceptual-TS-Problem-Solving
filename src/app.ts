// Problem solving 

// 01. Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

const repeatString = (str: string, num: number) =>{
    return str.repeat(num)
}

console.log(repeatString('Hello!', 5));

// 02. Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

const findLargestNumber = (arry: number[]) =>{
    return Math.max(...arry)
}

console.log(findLargestNumber([23,53,75,12,54,67]));


// 03. Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

const filterEvenNumbers = (array: number[]): number[] =>{
    return array.filter((num) => num % 2 === 0)
}

console.log(filterEvenNumbers([3,4,8,7,9,2]));

// 04. Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

const reverseArray = <T>(arr: T[]): T[] =>{
    return arr.reverse();
} 

console.log(reverseArray([1,2,3,4,5])); 

// 05. You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

// Hints: Use a reduce() method to sum the grades. average = total grades/ total length

interface student {
    name: string,
    age: number,
    grades: number[]
}

const student1 : student = {
    name : 'shahin',
    age : 20,
    grades : [95,96,90,98,99,93]
}

const averageGradeForBob = student1.grades.reduce((num, prev) => num + prev, 0)
console.log(averageGradeForBob);