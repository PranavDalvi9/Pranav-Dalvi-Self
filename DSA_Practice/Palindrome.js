const str = "hello";

Palindrome(str);

function Palindrome(str) {
  var bag = "";
  for (var i = str.length - 1; i >= 0; i--) {
    bag = bag + str[i];
  }

  if (str === bag) {
    console.log("Palindrome");
  } else {
    console.log("is Not a Palindrome");
  }
}
