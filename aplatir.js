function aplatirCeTableau(arr) {

    let result = [];

    function aplatir(arg) {
        if(Array.isArray(arg)) {
            for(let i = 0 ; i < arg.length ; i++ ) {
                aplatir(arg[i])
            }

            
        }

        else {
                result.push(arg)
            }
    }

    arr.forEach(aplatir);
    return result
}

console.log(aplatirCeTableau([1 , [2] , [3 , [[4]]]]));
