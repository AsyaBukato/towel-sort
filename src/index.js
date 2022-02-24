module.exports = function towelSort (matrix) {

  let result = [];
  if (!matrix) {
    return result;
  }

  matrix.forEach((array, idx) => {
    if (idx % 2 === 0) {
      array.forEach((digit) => result.push(digit));
    }
    else {
      array.reverse().forEach((digit) => result.push(digit));
    }
  })

  return result;
}
