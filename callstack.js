// how many ways to count to N only using numbers no larger than m  

function count_partition(n, m) {
  if (n === 0) {
    return 1 }
  if (m === 0 || n < 0) {
    return 0
  } else {return count_partition(n - m,  m) + count_partition(n, m-1)}
  }

let result = count_partition(5,2);


// Fisher Yates to shuffle an array

function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        let j = (Math.floor(Math.random() * i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    console.log(array);
}

let array = [1,2,3,4,5,6,7,8,9,10,11]

shuffle(array);


// Recursive shuffle

function CleanShuffle(array) {
    // create a new array
    let shuff = [];
    //set the base case to return shuffled array
    if(!array.length) {
        return shuff
    }
    //create a random index number
    let i = Math.floor(Math.random()) * array.length;
    //push a random element into the shuffled array
    shuff.push(array[i]);
    //create an array without the pushed element
    let slicedArray = array.slice(0, i).concat(array.slice(i+1));
    //concat recursive call with shuffled array
    return shuff.concat(CleanShuffle(slicedArray));
}




// Binary search algorithm that takes a sorted array and then search for a specified value (x)
// O(log N)
function binarySearch (arr, x) {
    let lowIndex = 0;
    let highIndex = arr.length-1;
    let midPoint;
    while ( highIndex >= lowIndex) {
        midPoint = lowIndex + Math.floor((highIndex - lowIndex) / 2)

        if (arr[midPoint] === x) {
            return midPoint
        }

        if (arr[midPoint] > x) {
            highIndex = midPoint - 1;
        }

        else {
            lowIndex = midPoint + 1;
        }
    }
    console.log("Number not present")
    return -1

}
let test = [11,12,13,14,15];
console.log(binarySearch(test, 15));

// Recursive bubble sort algorithm to sort an array
function bubbleSort(arr, n) {
    let sorted = true;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i +1]) {
            let t = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = t;
            sorted = false;
        }
    }
        if (sorted == false) {
            bubbleSort(arr, n);
        }
        return arr
 }

 
  
 // Sum & average

 function sum(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length
 }


// Calculate the sum of the elements of an array using recursion
 function recursiveSum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return (recursiveSum(arr, n-1) + arr[n-1])
 }

 // Algo Mathieu

 function diceRoll(n) {
    let playerTotal = 0;
    let bankTotal = 0;
    for (let i = 0; i < n; i++) {
        let playerScore = Math.ceil(Math.random() * 6)
        let bankScore = Math.ceil(Math.random() * 6)
        if(playerScore > bankScore) {
            playerTotal ++;
        }
        if(playerScore < bankScore) {
            bankTotal ++;
        }
        if(playerScore == bankScore) {
            playerTotal = playerTotal + 2
        }
    }
    if (playerTotal > bankTotal) {
        return `The player has won the game ${playerTotal} to ${bankTotal}`
    }
    if (bankTotal > playerTotal) {
        return `The bank has won the game ${bankTotal} to ${playerTotal}`
    }
    if (bankTotal == playerTotal) {
        return `It's a tie: ${bankTotal} to ${playerTotal}`
    }
}
//console.log(diceRoll(1000000));




  function reduce(accumulator, value) {
    return accumulator + value;
  }

let playerTotal = 0;
let bankTotal = 0;
 function recursiveDiceRoll(n) {
    if(n == 0) {
        return 0
    }
    let playerScore = Math.ceil(Math.random() * 6)
    let bankScore = Math.ceil(Math.random() * 6)
        if(playerScore > bankScore) {
            playerTotal = reduce(playerTotal, 1)
        }
        if(playerScore < bankScore) {
            bankTotal = reduce(bankTotal, 1)
        }
        if(playerScore == bankScore) {
            playerTotal = reduce(playerTotal, 2)
        }
    recursiveDiceRoll(n-1);
    console.count();
    if (playerTotal > bankTotal) {
        return `The player has won the game ${playerTotal} to ${bankTotal}`
    }
    if (bankTotal > playerTotal) {
        return `The bank has won the game ${bankTotal} to ${playerTotal}`
    }
    if (bankTotal == playerTotal) {
        return `It's a tie: ${bankTotal} to ${playerTotal}`
    }
    
}

console.log(recursiveDiceRoll(5));


// QUICKSORT ALGORITHM

function quickSort(arr){
    if(arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length-1; i++) {
        arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i])
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

let  testArr = [3, 24, 34, 1, 12 ,3, 4 ,99]
console.log(quickSort(testArr));
