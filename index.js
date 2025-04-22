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
function fibsRec(n) {
  console.log("This was printed recursively");

  if (n < 2) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let numberArr = [...fibsRec(n - 1)];
    let numberArrIndex = numberArr.slice(-2);
    numberArr.push(numberArrIndex[0] + numberArrIndex[1]);
    return numberArr;
  }
}

console.log(fibsRec(8));
console.log("Console working!");
