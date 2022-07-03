function isOdd(n) {
  return isEven(Number(n) + 1);
}
function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));