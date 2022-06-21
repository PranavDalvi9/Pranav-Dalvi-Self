const arr = [10, 19, 88, 65, 22];

maximum(arr);

function maximum(arr) {
  var max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
