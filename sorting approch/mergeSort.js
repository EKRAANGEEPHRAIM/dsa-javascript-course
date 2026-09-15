function mergeSort(arr) {
if(arr.length < 2) return arr


const mid = Math.floor(arr.length / 2)
const left = arr.slice(0, mid)
const right = arr.slice(mid)


return mergeSort(left) , mergeSort(right)
}

console.log(mergeSort([8,20,-2 , 4,-6]))