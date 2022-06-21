console.log("hello")

const num = "153"

let temp = num
let sum  = 0

while(temp > 0){
    // console.log((temp % 10)** num.length)
sum = sum + ((temp % 10) ** num.length)
    temp = Math.floor(temp / 10)
}

console.log(sum)