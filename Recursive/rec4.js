function aplatir(arr) {
return arr.reduce((acc , val) => {
    return Array.isArray(val) ? acc.concat(aplatir(val)) : acc.concat(val)
}, [] )


}

console.log([1, [2,3, [4,5]]])

