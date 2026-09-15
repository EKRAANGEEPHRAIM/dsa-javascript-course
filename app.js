// const arr = [1,2,3,4,5,6,7,8,96]


// function sumArray() {

// let sum = 0 ;

// for(let i = 0 ; i < arr.length ; i++) {
//     sum += arr[i]
// }


// return sum
// }


// console.log(sumArray(arr))


//  function maxArray(arr) {

//     if(arr.length === 0) {
//         return []
//     }

//     let max = arr[0]


//     for(let i = 0 ; i < arr.length ; i++) {


//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return max
//  }

//  console.log(maxArray([1,2,3,4,5,6,7]))



// function evenNumbers(arr) {
//     let result = [];

//     for(let i = 0 ; i < arr.length ; i++) {
//         if(arr[i] % 2 === 0) {
//            result.push(arr[i])
//         }
//     }

//   return  result
// }

// console.log(evenNumbers([1,2,3,4,5,6,7,8,9,18,16,14]))


// function reversedArray(arr) {

//     let reversed = []
//     arr.sort((a, b) => a - b)
    

//     for(let i = arr.length - 1 ; i >= 0 ; i--) {

//         reversed.push(arr[i])
//     }


//     return reversed
// }

// console.log(reversedArray([1,2,52,36,48,25,108,98]))



// function findElement (arr , element) {

//     for(let i = 0 ; i < arr.length ; i++) {
//         if(arr.includes(element)) {
//             return true
//         }
//     }
     
//     return false
// }


// console.log(findElement([1,2,3,4,6,6,8] , 7))


// function removeDuplicate(arr) {


//     let unique = [];

//     for(let i = 0 ; i < arr.length ; i++) {

        
        
//         if(!unique.includes(arr[i])) {
//             unique.push(arr[i]) 
//         }
//     }

//     return unique

// }

// console.log(removeDuplicate([1,1,1,2,2,3,3,4,5,5,6,6,7,7,8,8,9,9,9]))


// function threeLargestNumber(arr) {
// if(arr.length < 3) {
//     return arr.sort((a , b) => a - b)
// }


// let first = -Infinity
// let second = -Infinity
// let third = -Infinity


// for(let i = 0 ; i < arr.length ; i++) {

//     if(arr[i] > first) {
//         third = second ;

//         second = first ;

//         first = arr[i]

//         console.log(arr[i])
//     }

//     else if(arr[i] > second) {
//         third = second ;
//         second = arr[i]

//         console.log(arr[i])
//     }
//     else if( arr[i] > third) {
//         third = arr[i]
//         console.log(arr[i])
//     }

    
// }

// return [first , second , third]

// }


// console.log(threeLargestNumber([1,2,3,-4,-5,180,-366666, 25555, -555]))



// function rotateRight(arr) {

//     if(arr.length === 0 ) {
//          return arr
//     }


//     let last = arr[arr.length - 1]
   
//     for(let i = arr.length - 2 ; i >= 0 ; i--) {
//      arr[i + 1] = arr[i]

     
//     }

//     arr[0] = last
//     return arr
// }

// console.log(rotateRight([1,2,3,4,5,6,78,9]))


// function secondLargest(arr) {


//     if(arr.length < 2) {
//         return arr
//     }

//     let first = -Infinity;
//     let second = -Infinity;



//     for(let i = 0 ; i < arr.length ; i++) {
//         if(arr[i] > first) {
//             second = first;
//             first = arr[i]
//         }

//         else if(arr[i] > second) {
//             second = arr[i]
//         }
//     }

//     return [second]
// }


// console.log(secondLargest([1,2,3,4,5,6,7,8,9]))
// console.log(secondLargest([5, 10, 3, 8])); // 8
// console.log(secondLargest([1, 2, 3, 4, 5])); // 4
// console.log(secondLargest([10, 10, 10])); // 10
// console.log(secondLargest([5])); // 5


// function rotateRight(arr , k) {
//     if(arr.length === 0) return arr


//     const rotation = k % arr.length

//     const result = new Array(arr.length)

//     for(let i = 0 ; i < arr.length ; i++) {
//         result[(i + rotation) % arr.length] = arr[i]
       
//     }

//      return result
// }

// console.log(rotateRight([1,2,3,4,5,6,7], ))


// function frequency(arr) {

//     const map = {}

//     for(const n of arr) {
//         map[n] = (map[n] || 0) + 1
        
//     }

//     return map
// }

// console.log(frequency([1,1,1,2,2,3,3,4,5,6,7,8]))

// function maxSubArrays(nums) {

// if(nums.length === 0 ) return 0;

// let maxSoFar = nums[0];
// let currentSum = nums[0];


// for(let i = 1 ; i < nums.length ; i++) {
//     if(currentSum < 0) {
//         currentSum = 0
//     }

//     currentSum += nums[i]

//     if(currentSum > maxSoFar) {
//         maxSoFar = currentSum
//     }
// }


// return maxSoFar
// }

// console.log(maxSubArrays([-2,1,-3,4,-1,2,1,-5,4]))


// 


// function findMaxConsecutives(nums) {
//     let answer = 0 ;
//     let count = 0

//     for(let num of nums) {
//         if(num === 1 ) {
//             count++;

//             if(count > answer) {
//                 answer = count
//             }
//         }

//         else {
//             count =0
//         }
//     }

//     return answer
// }

// console.log(findMaxConsecutives([1,2,3,4,5,6,7,8,9]))


// function countOccurrences(arr , target) {

//     let count = 0 ;

//     for(let i = 0 ; i < arr.length ; i++ ){
//         if(arr[i]  === target) {
//             count++;
//         }
//     }

//     return count


// }
// console.log(countOccurrences([1, 2, 2, 3, 2, 4, 5], 2)); // Résultat : 3
// console.log(countOccurrences([1, 1, 1, 1], 1));       // Résultat : 4
// console.log(countOccurrences([1, 2, 3], 4));         // Résultat : 0


// function firstAboveThreshold(arr, threshold) {
//     for(let i = 0 ; i < arr.length ; i++) {
//         if(arr[i] > threshold) {
//             return arr[i];
//             break
//         }
//     }

//     return undefined
// }



// console.log(firstAboveThreshold([1, 5, 3, 8, 2], 4)); // Résultat : 5
// console.log(firstAboveThreshold([1, 2, 3], 10));      // Résultat : undefined


// function rotateLeft(arr) {
    
// if(arr.length <= 1 ) return arr

// let result = []

// for(let i = 1 ; i < arr.length ; i++) {
//     result[i - 1 ] = arr[i]
// }

// result[arr.length - 1] = arr[0]

// return result

// }

// console.log(rotateLeft([1, 2, 3, 4, 5]))

// function mergeUnique(arr1 , arr2) {
//     if(arr1.length === 0 ) {
//         return arr2
//     }

//     if(arr2.length === 0) {
//         return arr1
//     }

//     let result = []


//     for(let i = 0 ; i < arr1.length ; i++) {
//         let existing = false;

//         for(let k = 0 ; k < result.length ; k++) {
//             if(result[k] === arr1[i]) {
//                 existing = true;
//                 break
//             }
//         }

//         if(!existing) {
//             result.push(arr1[i])
//         }
//     }


//     for(let j = 0 ; j < arr2.length ; j++) {
//         let existing = false;

//         for(let m = 0 ; m < result.length ; m++) {
//             if(result[m] === arr2[j]) {
//                 existing = true;
//                 break
//             }
//         }

//         if(!existing) {
//             result.push(arr2[j])
//         }
//     }

//     return result
// }

// console.log(mergeUnique([1,2,3], [3,4,5])); // [1,2,3,4,5]
// console.log(mergeUnique([], [1,1,1]));      // [1]
// console.log(mergeUnique([5,5,5], [5,5]));

// function seperateEvenOdd(arr) {

//     let even = []
//     let odd = []

//     for(let i = 0 ; i < arr.length ; i++) {

//         if(arr[i] % 2 === 0 ) {
//             even.push(arr[i])
//         }

//         else {
//             odd.push(arr[i])
//         }
//     }


//     return [even , odd]

// }

// console.log(seperateEvenOdd([1,2,3,4,5,6,7,8,9]))


// function hasPairWithAdd(arr , target) {

// if(arr.length === 0 ) return  false


// for(let i = 0 ; i <  arr.length ; i++) {

//     for(let j = i + 1 ; j < arr.length ; j++) {
//         let result = arr[i] + arr[j]

//         if(result === target) {
//             return true
//         } 
//     } 
// }

// return false

// }
// console.log(hasPairWithAdd([1,2,3,4,5,6], 9));  // true (3+6 ou 4+5)
// console.log(hasPairWithAdd([1,2,3,4,5,6], 15)); // false
// console.log(hasPairWithAdd([1,1,1,1], 2));  



// function isArrayPalindrome(arr) {


//     if(arr.length === 0 ) {
//         return false
//     }

//     for(let i = 0 ; i < arr.length ; i++) {
//         let j = arr.length - 1 - i;

//         if(arr[i] !== arr[j]) {
//             return false
//         }
//     }

//     return true
// }

// console.log(isArrayPalindrome([1,2,3,2,1]))



// function isAnagram(s , t) {
//     if(s.length !== t.length) return false

//     let  countS = s.split("").sort().join()
//     let countT = t.split("").sort().join()


//     return countS === countT
// }


// console.log(isAnagram("car" , "rac"))


// function isAnagram(s , t) {
//    if(s.length !== t.length) return false
   
   

//    const count = {}

//    for(let c of s) {
//     count[c] = (count[c] || 0) + 1;
//    }

//    for(let c of t) {
//     if(!count[c]) return false
    
//    }

//    return true



// }

//  console.log(isAnagram("car" , "rac"))




// function twoSum(arr , target ) {

//     for(let i = 0 ; i < arr.length ; i++) {
//         for(let j = i + 1 ; j < arr.length ; j++) {

//             let sum = arr[i] + arr[j]

//             if(sum === target) {
//                 return [arr[i] , arr[j]]
//             }
//         }


//         return []
//     }
// }

// console.log(twoSum([1,2,3,4,5,6,7,8,9] , 8))



// function twoSum(arr , target) {
//     const seen = new Map()


//     for(let c of arr) {


//         const diff = target - arr[c]
//         if(seen.has(diff)) {
//             return [seen.get(diff) , c]
//         }

//         seen.set(arr[c], c)
//     }
// }


// console.log(twoSum([1,2,3,4,5],8))


// function groupAnagrams(strs) {
//     const group = new Map()

//     for(let word of strs) {
//         const key = word.split("").sort().join()

//         if(!group.has(word)) {
//             group.set(key , [])
//         }

//         group.get(key).push(word)
//     }
// }


// function removeDuplicate(arr) {
//   const unique = [];

//   for(let i = 0 ; i < arr.length ; i++) {
//     if(!unique.includes(arr[i])) {
//         unique.push(arr[i])
//     }
//   }

// return unique

// }


// function removeDuplicate(arr) {
//     const seen = new Set()

//     return arr.filter(x => {
//         if(seen.has(x) ) return false;
//         seen.add(x)
//         return true
//     })
// }


// console.log(removeDuplicate([1,2,2,2,3,4,5,5]))


/*************************
 * LINKED LIST
 * **************************** */

// node


// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// // although a linked list

// class LinkedList {
//     constructor() {
//         this.head = null
//     }

//    print() {
//     let current = this.head;


//     while(current !== null) {
//         console.log(current.value)
//         current = current.next;
//     }
//    }


//    // add at first 
// prepend(value) {
//     const newNode = new Node(value);
   
//     newNode.next = this.head
//     this.head = newNode
    

// }


// // add at the last

// append(value) {

//     const newNode = new Node(value);
//     if(this.head === null) {
//         this.head = newNode
//         return;
//     }

//     let current = this.head
//     while(current.next !== null) {
//         current = current.next
//     }

//     current.next = newNode
// }


// remove(value) {
//     if(this.head === null) return;

//     if(this.head.value === value) {
//         this.head = this.head.next
//         return;
//     }

//     let current = this.head

//     while(current.next !== null && current.next.value !== value) {
//         current = current.next;
//     }

//     if(current.next !== null) {
//         current.next = current.next.next
//     }
// }




// revereList(head) {
//     let prev = null ;
//     let current = head;

//     while(current !== null) {
//         const next = current.next;

//         current.next = prev ;

//         prev = current ;
//         current = next ;
//     }

//     return prev;
// } 



// middleNode(head) {
//     let slow = head;
//     let fast = head ;


//     while(fast !== null && fast.next !== null) {
//         slow  = slow.next;
//         fast = fast.next.next;
//     }


//     return slow
    
// }



//  hasCycle(head) {
//     let slow  = head;
//     let fast = head ;

//     while(fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;


//         if(slow === fast) {
//             return true
//         }
//     }

//     return false
//  }
// }


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    getLength() {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            current = current.next;
            count++;
        }

        return count;
    }

    contains(target) {
        let current = this.head;

        while (current !== null) {
            if (current.value === target) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return this.head; // FIX: return early, sinon le nœud se pointait sur lui-même
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;

        return this.head;
    }

    insertAt(value, index) {
        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode; // FIX: il fallait mettre à jour this.head
            return this.head;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (current === null) {
                return this.head;
            }

            current = current.next;
        }

        if (current === null) {
            return this.head;
        }

        newNode.next = current.next;
        current.next = newNode;

        return this.head;
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }

        this.head = this.head.next; // FIX: mettre à jour this.head en interne
        return this.head;
    }

    removeLast() {
        if (this.head === null) {
            return null;
        }

        if (this.head.next === null) {
            this.head = null; // FIX: gérer le cas liste à un seul élément
            return this.head;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;

        return this.head;
    }

    removeValue(target) {
        if (this.head === null) {
            return null;
        }

        if (this.head.value === target) {
            this.head = this.head.next;
            return this.head;
        }

        let current = this.head;

        while (
            current.next !== null &&
            current.next.value !== target
        ) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }

        return this.head;
    }

    reverseList() {
        let prev = null;
        let current = this.head;

        while (current !== null) {
            const next = current.next;

            current.next = prev;

            prev = current;
            current = next;
        }

        this.head = prev; // FIX: mettre à jour this.head directement
        return this.head;
    }

    middleNode() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    hasCycle() {
        let fast = this.head;
        let slow = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }

    getLast() {
        if (this.head === null) {
            return null;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    nthFromEnd(n) {
        let slow = this.head;
        let fast = this.head;

        for (let i = 0; i < n; i++) {
            if (fast === null) {
                return null;
            }

            fast = fast.next;
        }

        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }

    mergeTwoLists(list1, list2) {
        const dummy = new Node(0);

        let current = dummy;

        while (list1 !== null && list2 !== null) {
            if (list1.value <= list2.value) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }

            current = current.next;
        }

        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        return dummy.next;
    }

    isPalindrome() {
        if (this.head === null || this.head.next === null) {
            return true;
        }

        let slow = this.head;
        let fast = this.head;

        // Trouver le milieu
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Inverser la deuxième moitié
        let prev = null;

        while (slow !== null) {
            const next = slow.next;

            slow.next = prev;
            prev = slow;
            slow = next;
        }

        // Comparer les deux moitiés
        let left = this.head; // FIX: "head" n'existait pas, il fallait this.head
        let right = prev;

        while (right !== null) {
            if (left.value !== right.value) {
                return false;
            }

            left = left.next;
            right = right.next;
        }

        return true;
    }

    removeNthFromEnd(n) {
        const dummy = new Node(0);
        dummy.next = this.head;

        let slow = dummy;
        let fast = dummy;

        // Avancer fast de n + 1 positions
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Avancer les deux
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        // Supprimer le Node
        slow.next = slow.next.next;

        this.head = dummy.next; // FIX: mettre à jour this.head directement
        return this.head;
    }
}

module.exports = { Node, LinkedList };

const list = new LinkedList()
list.head = new Node(10)
list.head.next = new Node(20)
list.head.next.next = new Node(50)



list.printList()

