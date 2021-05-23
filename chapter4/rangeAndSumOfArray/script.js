function range(num1, num2, step) {
  var numArray=[];
  if (step == null) {
    step = 1;
  }
  if (num1 > num2) {
    for (i=num1; i>=num2; i=i+step) {
      numArray.push(i);
    }
  }
  else {
    for (i=num1; i<=num2; i=i+step) {
      numArray.push(i);
    }
  }
  return numArray;
}

function sum(numArray) {
  sumArray = 0;
  for (i=0; i<numArray.length; i++) {
    sumArray = sumArray+numArray[i];
  }
  return sumArray;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 2, -2));
// → [10, 8, 6, 4, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2));
