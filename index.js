/* Fibonacci function */
// function fibs(n) {
//   let result = [0, 1];
//   let firstNumberIndex = 0;
//   let secondNumberIndex = 1;

//   if (n < 2) {
//     return [0];
//   }

//   while (n > 2) {
//     let i = result[firstNumberIndex] + result[secondNumberIndex];

//     result.push(i);
//     firstNumberIndex++;
//     secondNumberIndex++;
//     n--;
//   }

//   return result;
// }

/* Recursive fibonacci function */
// function fibsRec(n) {
//   console.log("This was printed recursively");

//   if (n < 2) {
//     return [0];
//   } else if (n === 2) {
//     return [0, 1];
//   } else {
//     let numberArr = [...fibsRec(n - 1)];
//     let numberArrIndex = numberArr.slice(-2);
//     numberArr.push(numberArrIndex[0] + numberArrIndex[1]);
//     return numberArr;
//   }
// }

// console.log(fibsRec(8));
// console.log("Console working!");

/* 
    if arr.length === 1 return arr

    const half = Math.ceil(list.length / 2); 

    set arrLeftHalf = list.slice(0, half);
    set arrRightHalf = list.slice(half);

    set leftHalf 

    return [...sort(arrLeftHalf), ...sort(arrRightHalf)]

*/

function sort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const half = Math.ceil(arr.length / 2);

    const arrLeftHalf = arr.slice(0, half);
    const arrRightHalf = arr.slice(half);

    const leftHalfFirstElement = arrLeftHalf[0];
    const rightHalfFirstElement = arrRightHalf[0];

    if (leftHalfFirstElement < rightHalfFirstElement) {
        console.log([...sort(arrLeftHalf), ...sort(arrRightHalf)])
        return [...sort(arrLeftHalf), ...sort(arrRightHalf)];
    } else {
        return [...sort(arrRightHalf), ...sort(arrLeftHalf)];
    }
  }
}

console.log(sort([3, 2, 1, 13, 8, 5, 0, 1]));
