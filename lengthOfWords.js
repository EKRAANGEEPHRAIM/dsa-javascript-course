// function LengthOfWord (str) {

// let test = str.split(' ')


// let max = 0

// for(let i = 0 ; i < test.length ; i++) {

// if(test[i].length > max) {
//     max = test[i].length
// }

// }

// return max

// }

// console.log(LengthOfWord("Du sublime au redicule , il n y a qu un pas"))




function LengthOfWord(str) {


    let arr = arr.split(' ');

    if(arr.length === 1) {
        return arr[0].length;
    }

    if(arr[0].length >= arr[1].length) {
        return LengthOfWord(arr.join(' '))
    }
}



 console.log(LengthOfWord("Du sublime au redicule , il n y a qu un pas"))

