/* Fibonacci function */
function fibs(n) {
  let result = [0, 1];
  let firstNumberIndex = 0;
  let secondNumberIndex = 1;

  if (n < 2) {
    return [0];
  }

  while (n > 2) {
    let i = result[firstNumberIndex] + result[secondNumberIndex];

    result.push(i);
    firstNumberIndex++;
    secondNumberIndex++;
    n--;
  }

  return result;
}

console.log(fibs(8));
console.log("Console working!");
