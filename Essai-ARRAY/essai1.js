
// let original = [1,2,3,4]

// let trueCopy1= original.slice()
// console.log(trueCopy1)
// let vraieCopie2 = [...original]


// trueCopy1.push(5)
// console.log(original)

// console.time("preallocated");
// let b = new Array(100000);
// for (let i = 0; i < 100000; i++) b[i] = i;
// console.timeEnd("preallocated");


// function twoSumTrie(arr , target) {
//     let left = 0 ;
//     let right = arr.length -1;

//     while(left < right) {
//         const sum = arr[left] + arr[right]

//         if(sum === target) {
//             return [left , right]
//         }

//         if (sum < target) {
//             left++;
//         }
//     else right--;
//     }

//     return null;
// }

// console.log(twoSumTrie([1,2,3,4,5,6,7,8,9] , 16))



// function maxSumWindow(arr , k) {
//     let sumWindow = 0;

//     for(let i = 0 ; i < k ; i++) {
//         sumWindow += arr[i]
        
//     }

//     let maxSum = sumWindow;

//     for(let i = k ; i < arr.length ; i++) {


//         sumWindow += arr[i] - arr[i - k]
//         maxSum = Math.max(maxSum, sumWindow)
//     }

//     return maxSum
// }


// console.log(maxSumWindow([1,2,1,1,3,5,4] , 3))


let people = [
{ nom: "Alice", age: 30 },
{ nom: "Bob", age: 25 },
{ nom: "Eve", age: 30 },
]


people.sort((a,b) => {
    if(a.age !== b.age) return a.age - b.age;
    return a.nom.localeCompare(b.nom)
})


