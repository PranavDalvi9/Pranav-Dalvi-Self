const str = "Hello";

removeDuplicate(str);

function removeDuplicate(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  var bag = "";
  for (const k in obj) {
    bag += k;
  }
  console.log(bag);
}
