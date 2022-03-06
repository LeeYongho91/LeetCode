/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let answer = 0;
    
    for(let x of nums) {
        if(x === target || x > target) break;
        if(x < target) answer++;
    }
    
    return answer;
    
  
};