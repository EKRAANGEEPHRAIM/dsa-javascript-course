function sameThing(str, end) {
    
let endWords = str.slice(-end.length)

 if( endWords === end) {
      return  "It is the same thing"
    }

else {
  return  "it is not"
}




}


console.log(sameThing("ours", "rs"))

