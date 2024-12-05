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

const calculateAverageGrade = (datas:student): number =>{
    return datas.grades.reduce((num, prev) => num + prev, 0)
}

const averageGradeForBob = calculateAverageGrade(student1);

console.log(averageGradeForBob);


// 06. You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

// Hints: Use getFullYear() method to extract the year to check the given year with current year.

type Book = {
    title : string,
    author: string,
    publishedYear: number
}

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2018
}

const date = new Date()
const currentYear = date.getFullYear();

const isRecentBook = (book: Book): boolean =>{
    if(currentYear - 5 <= book.publishedYear){
        return true;
    }
    else return false;
}

console.log("Current Year - 5:",currentYear-5);
console.log(isRecentBook(book1));