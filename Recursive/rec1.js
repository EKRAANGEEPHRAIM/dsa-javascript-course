function factorielle(num) {
    if( num <= 1) return 1


    return num * factorielle(num - 1)
}


console.log(factorielle(5))