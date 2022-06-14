class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        for index, value in enumerate(nums):
            remaining = target - value
           
            if remaining in seen:
                return (index, seen[remaining])
            
            seen[value] = index 