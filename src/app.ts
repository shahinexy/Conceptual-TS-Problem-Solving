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


