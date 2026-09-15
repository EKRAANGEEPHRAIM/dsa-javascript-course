function fonctionParam(arr , func) {
let sorted = arr.sort()

let result = [];

for(let i = 0 ; i < sorted.length ; i++) {
    if(func(sorted[i])) {
        result.push(sorted[i])
    }
}

return result

}

console.log(fonctionParam([1,2,25,3,4,90,105,5] ,   function(n) {return n >= 25}))