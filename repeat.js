function repeat(str, num) {
// ternaire
 return num > 0 ? str.repeat(num) : '' 

}

console.log(repeat('abc' , 6))

/*******
 * while loop
 * 
 * function repeat(str, num) {

    let final = '';

    while(num > 0) {
        final += str;
        num--;
    }

    return final;
}

console.log(repeat('abc' , 6))
 */


/******
 * 
 * recursive
 * 
 * function repeat(str, num) {

  if (num < 1) {
    return "";
  }

  else {
    str + repeat(str , num - 1) 
  }

}

console.log(repeat('abc' , 6))
 */