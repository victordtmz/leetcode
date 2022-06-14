/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    let seen = new Map();
    let result;
    nums.forEach((value, index) => {
        let remaining = target - value;
        
        if(seen.has(remaining)){
            // is difference between current value and target is in seen
            // console.log([index, seen.get(remaining)]);
            result = ([index, seen.get(remaining)]);
            }
        //if not, set current value as a key for the index, because index is the value we want at the en
        seen.set(value, index);
    });
    return result;
};
    
let result = twoSum([2,7,11,15], 9);
console.log(result);