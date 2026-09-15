function biggerNumber(arr) {

let result = []


for(let i = 0 ; i < arr.length ; i++) {
    let max = arr[0][i]
    for(let j = i ; j < arr[i].length ; j++ ){

        if(arr[i][j] > max){
            max = arr[i][j]
        }
    }
     result.push(max)
}

return result


}

console.log(biggerNumber([
    [1,2,3,4],
    [4,4,6,9,58,105],
    [5,35,65,98,107],
    [35,52,84,87,109]
]))