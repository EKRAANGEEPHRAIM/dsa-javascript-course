function Maj(str) {

    let min = str.toLowerCase().split(' ')

    let result =  min.map(x => x.replace(x.charAt(0) , x.charAt(0).toUpperCase()))



return result.join(' ')
}

console.log(Maj("The best in every life is make  a lot experirence"))