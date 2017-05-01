function reverseArray(array) {
  newArray = [];
  for (i=array.length-1; i>=0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (i=0; i<=Math.floor(array.length/2); i++) {
    tempNum = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = tempNum;
  }
  return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
