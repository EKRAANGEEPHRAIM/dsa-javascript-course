function climbingStaircase(n) {
const nbOfWays = [1 , 2]

for(let i = 2 ; i <= n ; i++) {
    nbOfWays[i]= nbOfWays[i-1] + nbOfWays[i - 2]
}

return nbOfWays[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))
