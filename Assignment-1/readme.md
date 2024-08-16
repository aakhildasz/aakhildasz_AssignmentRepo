# JavaScript Functions Collection

This repository contains a collection of 15 JavaScript functions that perform various tasks, including:

1. **isAnagram**: Checks if two strings are anagrams of each other.
2. **calculateTotalSpentByCategory**: Calculates the total spent by category from a list of transactions.
3. **findLargestElement**: Finds the largest element in an array of numbers.
4. **isPalindrome**: Checks if a string is a palindrome.
5. **calculateTime**: Calculates the time it takes to calculate the sum from 1 to n.
6. **countVowels**: Counts the number of vowels in a string.
7. **sumArray**: Calculates the sum of an array of numbers.
8. **filterEvenNumbers**: Filters an array of numbers to include only even numbers.
9. **findSmallestElement**: Finds the smallest element in an array of numbers.
10. **reverseString**: Reverses a string.
11. **fibonacci**: Calculates the nth number in the Fibonacci sequence.
12. **removeDuplicates**: Removes duplicates from an array.
13. **countOccurrences**: Counts the number of occurrences of a character in a string.
14. **findCommonElements**: Finds the common elements between two arrays.
15. **sortStrings**: Sorts an array of strings in alphabetical order.

## Usage

Each function can be used independently by calling it with the required arguments.

```javascript
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

const transactions = [
    { category: "groceries", price: 20 },
    { category: "entertainment", price: 50 },
    { category: "groceries", price: 30 }
];
console.log(calculateTotalSpentByCategory(transactions)); // [{category: "groceries", total: 50}, {category: "entertainment", total: 50}]

console.log(findLargestElement([1, 2, 3, 4, 5])); // 5

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

console.log(calculateTime(100000)); // Time in seconds

console.log(countVowels("hello world")); // 3

console.log(sumArray([1, 2, 3, 4, 5])); // 15

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]

console.log(findSmallestElement([1, 2, 3, 4, 5])); // 1

console.log(reverseString("hello")); // "olleh"

console.log(fibonacci(10)); // 55

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

console.log(countOccurrences("hello world", "l")); // 3

console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]

console.log(sortStrings(["banana", "apple", "cherry"])); // ["apple", "banana", "cherry"]
```

## Submission Details

- **Submitting Date**: 2/08/2024

- **Everything is followed as per steps**: Yes

- **Assignment Level**: Easy

- **Code Quality Is Maintained?**: Yes
