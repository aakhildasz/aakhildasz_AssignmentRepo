// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
function isAnagram(str1, str2) {
    // Function to clean and sort the strings for comparison
    const cleanStr = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    // Compare the cleaned and sorted strings
    return cleanStr(str1) === cleanStr(str2);
}

// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.
function calculateTotalSpentByCategory(transactions) {
    // Object to hold the total spent by each category
    const categoryTotals = {};

    // Iterate over each transaction and sum the prices per category
    transactions.forEach(transaction => {
        if (categoryTotals[transaction.category]) {
            categoryTotals[transaction.category] += transaction.price;
        } else {
            categoryTotals[transaction.category] = transaction.price;
        }
    });

    // Convert the categoryTotals object into an array of objects
    return Object.keys(categoryTotals).map(category => ({
        category: category,
        total: categoryTotals[category]
    }));
}

// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
function findLargestElement(numbers) {
    // Use Math.max with the spread operator to find the largest element
    return Math.max(...numbers);
}

// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) {
    // Clean the string by removing non-alphanumeric characters and converting to lowercase
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    // Compare the cleaned string with its reversed version
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
function calculateTime(n) {
    // Record the start time
    const startTime = Date.now();
    let sum = 0;
    // Calculate the sum from 1 to n
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    // Record the end time
    const endTime = Date.now();
    // Calculate and return the time difference in seconds
    return (endTime - startTime) / 1000;
}

// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
    // Define the vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;
    // Count each vowel in the string
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
    // Use reduce to sum up the numbers in the array
    return numbers.reduce((sum, number) => sum + number, 0);
}

// 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    // Use filter to create an array of only the even numbers
    return numbers.filter(number => number % 2 === 0);
}

// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
    // Use Math.min with the spread operator to find the smallest element
    return Math.min(...numbers);
}

// 10: Create a function `reverseString` that takes a string and returns the string reversed.
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
}

// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
    // Handle base cases
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    // Compute the nth Fibonacci number iteratively
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
    // Use a Set to remove duplicates and convert it back to an array
    return [...new Set(arr)];
}

// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
    // Split the string into an array of characters, filter by the target character, and count the results
    return str.split('').filter(c => c === char).length;
}

// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.
function findCommonElements(arr1, arr2) {
    // Filter arr1 to include only elements also found in arr2
    return arr1.filter(element => arr2.includes(element));
}

// 15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {
    // Use the default array sort method to sort strings alphabetically
    return arr.sort();
}



//  Test cases:

// Test isAnagram
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

// Test calculateTotalSpentByCategory
const transactions = [
    { category: "groceries", price: 20 },
    { category: "entertainment", price: 50 },
    { category: "groceries", price: 30 }
];
console.log(calculateTotalSpentByCategory(transactions)); // [{category: "groceries", total: 50}, {category: "entertainment", total: 50}]

// Test findLargestElement
console.log(findLargestElement([1, 2, 3, 4, 5])); // 5

// Test isPalindrome
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

// Test calculateTime
console.log(calculateTime(100000)); // Time in seconds

// Test countVowels
console.log(countVowels("hello world")); // 3

// Test sumArray
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Test filterEvenNumbers
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]

// Test findSmallestElement
console.log(findSmallestElement([1, 2, 3, 4, 5])); // 1

// Test reverseString
console.log(reverseString("hello")); // "olleh"

// Test fibonacci
console.log(fibonacci(10)); // 55

// Test removeDuplicates
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Test countOccurrences
console.log(countOccurrences("hello world", "l")); // 3

// Test findCommonElements
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]

// Test sortStrings
console.log(sortStrings(["banana", "apple", "cherry"])); // ["apple", "banana", "cherry"]
