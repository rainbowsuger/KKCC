/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */
var moveZeroes = function(nums) {
    const len = nums.length || 0;
    if(len < 2) return nums;
    let j = 0
    for(let i = 0; i<len; i++) {
        if(nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }
    for(j; j<len; j++) {
        nums[j] = 0
    }
};