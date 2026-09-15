function insert(arr,num) {

let sorted  = arr.sort()


for (let i = 0 ; i < sorted.length ; i++) {

    if(sorted[i] >= num) {
        return i
    }
}

return sorted

}

console.log(insert([30,45,87,96,54,60] , 60))