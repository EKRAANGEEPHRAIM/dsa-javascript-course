function threeElementOfArray(arr) {
    if(arr.length < 3) {
        arr.sort((a , b) => a - b)
    }


    let first  = -Infinity
    let second  = -Infinity
    let third  = -Infinity



    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > first) {
            third = second
            second = first
            first = arr[i]
        }
         else if(arr[i] > second) {
            third = second
            second = arr[i]
        }
        else if(arr[i] > third) {
            third = arr[i]
        
        }
    }


    return [first , second , third]
}


console.log(threeElementOfArray([1,5,0,8,,3,52,-62,25 , -36]))