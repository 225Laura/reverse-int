module.exports = function reverse(n) {
    const numberAbs = Math.abs(n);
    const numberToString = String(numberAbs);
    const arrayOfNumbers = numberToString.split("");
    const arrayReverse = arrayOfNumbers.reverse();
    const gluedNumbers = +arrayReverse.join("");
    return gluedNumbers;
}
