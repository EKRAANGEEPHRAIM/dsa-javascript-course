function bestInvest(arr) {

let bestProfit = 0;
let test = 0 ;
let pos = 0 ; 
let date = [];
let day = ["lundi","mardi","mercredi" ,"jeudi","vendredi","samedi","dimanche"]

for(let i = 0 ; i < arr.length ; i++) {
    test = arr[i];

    for(let j = pos ; j < arr.length ; i++) {
        if(arr[j] - test > bestProfit) {
            bestProfit = arr[j] - test;

            date.push([test , arr[j]])
            if(date.length > 1) {
                date.shift();
            }
        }
    }
    pos++;
}

return bestProfit

}


console.log(bestInvest([50, 10 , 20 , 2 , 80 , 60 , 20]))