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

const reverseArray = (arr: any[]): any[] =>{
    return arr.reverse();
} 

console.log(reverseArray([1,2,3,4,5]));