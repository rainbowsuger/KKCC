// 动态规划 198
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    let map = [nums[0], Math.max(nums[0], nums[1])];
    for(let i=2; i<nums.length; i++) {
        map[i] = Math.max(map[i-2], map[i-2] + nums[i])
    }
    return map[nums[length-1]];
}
console.log('动态规划', rob([2,7,9,3,1]))

/** 300. 最长上升子序列
    给定一个无序的整数数组，找到其中最长上升子序列的长度。
    示例:
    输入: [10,9,2,5,3,7,101,18]
    输出: 4 
    解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。说明:
    可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
    你算法的时间复杂度应该为 O(n2) 。
    进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
*/
//dp[i] = max(dp[i], dp[j] + 1); j < i
const lengthOfLIS = (nums) => {
    let n = nums.length
    if(!n) return 0;
    let dp = new Array(n).fill(1)
    for(let i = 1; i < n; i++){
      //我们需要找前面比自己小的；
      for(let j = 0; j < i; j++){
          if(nums[i] > nums[j]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      } 
    }
    return Math.max(...dp) 
  }