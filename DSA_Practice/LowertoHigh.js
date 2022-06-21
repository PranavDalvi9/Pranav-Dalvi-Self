var str = "aDSKldkf";
var bag = "";

var caps = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
var low = "abcdefghijklmnopqrstuvwxyz";

for (var i = 0; i < str.length; i++) {

  for (var j = 0; j < caps.length; j++) {
    if (str[i] == low[j]) {
      var big = caps[j];
      bag = bag + big;
    }
    else if (str[i] == caps[j]) {
      var small = low[j];
      bag = bag + small;
    }
  }

}
console.log(str);
console.log(bag);



{
    {
        asdas:"sdad"
asdad:{
    dasda:asdad
    asdad:Asada
    "asad""asd
}
    }
}