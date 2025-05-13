const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  n = Number(n);
  const result = [];
  let current = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (sum + val > n) {
      result.push(current);
      current = [val];
      sum = val;
    } else {
      current.push(val);
      sum += val;
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
