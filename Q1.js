// Given a square matrix (2D array), calculate the sum of its two diagonals.

// The two diagonals in consideration are the primary diagonal that spans from the top-left to the bottom-right and the secondary diagonal that spans from top-right to bottom-left. If a number is part of both diagonals (which occurs only for odd-sized matrices), it should be counted only once in the sum.

// Expected Time Complexity: O(n * m),
// Expected Space Complexity: O(1)

// Examples

// Example 1:
// Input:
// [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Expected Output: 25
// Justification: Summing up the two diagonals (1+5+9+3+7), we get 25. Please note that the element at [1][1] = 5 is counted only once.

// Example 2:
// Input:
// [[1,0],
// [0,1]]
// Expected Output: 2
// Justification: The sum of the two diagonals is 1+1 = 2.

// Example 3:
// Input:
// [[5]]
// Expected Output: 5
// Justification: Since there’s only one element, it is the sum itself.

const arr = [[1,0],
[0,1]]



const diagonalSum = (arr) => {

    let sum1 = 0
    let sum2 = 0
    let mid = 0


    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][(arr.length-1)-i]
    }

    if(arr.length%2 !==0 ){
        let hlaf = Math.floor( arr.length/2);
        mid= arr[hlaf][hlaf];
    }
          

    return sum1+sum2-mid
    
}

console.log(diagonalSum(arr))




