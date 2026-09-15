function difTab(arr1 , arr2) {

    let result = [];

    function checkDiff(first , second) {
       for(let i  = 0 ; i < first.length ; i++ ) {
        if(second.indexOf(first[i]) === -1) {
            result.push(first[i])
        }
       } 
    }


    checkDiff(arr1 , arr2)
    checkDiff(arr2 , arr1)

    return result;
}

console.log(difTab([1,2,3,5] , [1,2,3,4,5]))