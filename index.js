function mean(arr) {
  const sumArr = arr.reduce((acc, val) => acc + val);
  const mean = (1 / arr.length) * sumArr;
  return mean;
}

function disp(arr) {
  let disp = 0;
  for (let i = 0; i < arr.length; i++) {
    disp += (arr[i] - mean(arr)) ** 2 / arr.length;
  }
  return disp;
}

function corr(arr1, arr2) {
  let corr = 0;
  if (arr1.length !== arr2.length) {
    throw new Error("Length of arrays are not similar");
  } else {
    for (let i = 0; i < arr1.length; i++) {
      corr += ((arr1[i] - mean(arr1)) * (arr2[i] - mean(arr2))) / arr1.length;
    }
  }
  return corr;
}

console.log(mean([1, 2, 3, 4])); //2.5

console.log(disp([1, 2, 3, 4])); //1.25

console.log(corr([1, 2, 3, 4], [2, 1, 5, 8])); //2.75
