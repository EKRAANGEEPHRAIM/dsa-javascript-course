function sum( arr , i = 0) {
if(i === arr.length) return 0;

return arr[i] + sum(arr , i + 1)
}



console.log(sum([1,2,3,4,5,6,7]))