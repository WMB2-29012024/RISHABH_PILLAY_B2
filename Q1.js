// Given a 2D array accounts of m x n size, accounts[j] represents money in the jth bank account of the ith customer.

// Return the wealth of the richest individual from a set of bank customers.

// Imagine every customer has multiple bank accounts, with each account holding a certain amount of money. The total wealth of a customer is calculated by summing all the money across their multiple accounts.

// Examples

// Example 1:
// Input: [[5,2,3],[0,6,7]]
// Expected Output: 13
// Justification: The total wealth of the first customer is 10 and of the second customer is 13. So, the output is 13 as it’s the maximum among all customers.

// Example 2:
// Input: [[1,2],[3,4],[5,6]]
// Expected Output: 11
// Justification: Total wealth for each customer is [3, 7, 11]. Maximum of these is 11.

// Example 3:
// Input: [[10,100],[200,20],[30,300]]
// Expected Output: 330
// Justification: Total wealth for each customer is [110, 220, 330]. The wealthiest customer has 330.

const arr1 = [[5,2,3],[0,6,7]];
const arr2 = [[1,2],[3,4],[5,6]];
const arr3 = [[10, 100], [200, 20], [30, 300]];

const richestIndividua = (arr) => {

    let richest = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let sum = 0;
        for (let j = 0; j < element.length; j++) {
            sum += element[j];
        };
        if (sum > richest) {
            richest = sum;
        };
    };
    return richest;
};

console.log(richestIndividua(arr1));
console.log(richestIndividua(arr2));
console.log(richestIndividua(arr3));


