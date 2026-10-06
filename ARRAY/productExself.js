var productExceptSelfNaive = function(nums) {
    if (!nums) return [];
    const n = nums.length;
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                product *= nums[j];
            }
        }
        result[i] = product; 
    }
    return result; 
}

console.log(productExceptSelfNaive([1, 2, 3, 4])); // Résultat : [24, 12, 8, 6]
