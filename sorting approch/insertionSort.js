function insertionSort(arr){
for(let i = 1; i < arr.length; i++) {
    let numbertoInsert = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > numbertoInsert
) {
        arr[j + 1 ] = arr[j]
        j = j - 1;
        
    }
    arr[j + 1] = numbertoInsert
}

return arr

}

console.log(insertionSort([8,20,-2,52,18,-158,1]))