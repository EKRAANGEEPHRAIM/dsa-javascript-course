function factoriser(num) {
    for( i = 1 ; num > 1 ; num--) {
     i *= num
    }

    return i
}

console.log(factoriser(10))