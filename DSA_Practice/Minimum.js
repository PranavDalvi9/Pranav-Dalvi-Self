const arr = [100, 10, 22, 42, 22];

minimum(arr);

function minimum(arr) {
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
